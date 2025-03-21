const express = require('express');
const router = express.Router();
const Product = require('../model/products');

// ✅ 1. Get all products
router.get('/get', async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(200).json({ message: '⚠️ No products found. Please add some products.' });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 2. Get a product by name (Case-Insensitive Search)1
router.get('/get/:productName', async (req, res) => {
  try {
    const productName = req.params.productName;
    const product = await Product.findOne({
      productName: { $regex: new RegExp(`^${productName}$`, 'i') }, // Case-insensitive regex
    });

    if (!product) {
      return res.status(404).json({ message: '❌ Product not found' });
    }
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 3. Create a new product
router.post('/create', async (req, res) => {
  try {
    const { productName, productCategory, Price, StartUpName, Ratings, usp } = req.body;

    // Check for missing fields
    if (!productName || !productCategory || !Price || !StartUpName || !Ratings || !usp) {
      return res.status(400).json({ message: '⚠️ All fields are required' });
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({
      productName: { $regex: new RegExp(`^${productName}$`, 'i') },
    });
    if (existingProduct) {
      return res.status(409).json({ message: '❌ Product already exists' });
    }

    // Create a new product
    const newProduct = await Product.create({
      productName,
      productCategory,
      Price,
      StartUpName,
      Ratings,
      usp,
    });

    res.status(201).json({
      message: '✅ Product created successfully',
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 4. Update a product by name
router.put('/update/:productName', async (req, res) => {
  try {
    const productName = req.params.productName;
    const updatedProduct = await Product.findOneAndUpdate(
      { productName: { $regex: new RegExp(`^${productName}$`, 'i') } }, // Case-insensitive regex
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: '❌ Product not found' });
    }

    res.status(200).json({
      message: '✅ Product updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 5. Delete a product by name
router.delete('/delete/:productName', async (req, res) => {
  try {
    const productName = req.params.productName;
    const deletedProduct = await Product.findOneAndDelete({
      productName: { $regex: new RegExp(`^${productName}$`, 'i') },
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: '❌ Product not found' });
    }

    res.status(200).json({
      message: '✅ Product deleted successfully',
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 6. Delete all products (Optional API)
router.delete('/delete-all', async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: '✅ All products deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
