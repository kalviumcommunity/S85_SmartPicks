const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../model/db'); // Assuming this contains your User schema

// Define the Product schema (collection: products)
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  startupname: {
    type: String,
    required: true,
  },
  // Add more fields if needed
});

// Register the model using collection name "products"
const Product = mongoose.model('products', productSchema);

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ✅ Route to get all usernames (for dropdown)
router.get('/findbrand', async (req, res) => {
  try {
    const users = await User.find({}, 'username'); // only return the 'username' field
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Route to get all products by startupname (username)
router.get('/findproducts/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const userExists = await User.findOne({ username });
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const products = await Product.find({ StartUpName: username });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Create a new user
router.post('/create', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete a user by username
router.delete('/delete/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await User.deleteMany({ username });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update username
router.put('/update/:newuser/:olduser', async (req, res) => {
  try {
    const { newuser, olduser } = req.params;
    const updated = await User.findOneAndUpdate(
      { username: olduser },
      { username: newuser },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
