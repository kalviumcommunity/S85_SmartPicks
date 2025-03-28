const express = require('express')
const route = express.Router()
const Product = require('../model/products');


route.post('/handleaddproduct',async (req,res)=>{
    let data= req.body
    // console.log('✅ Headers:', req.headers);
    // console.log('✅ Body:', req.body); // Check incoming data

    try{
        const createProduct= await Product.create({
            productName : data.productName ,
            url: data.url ,
            productCategory : data.productCategory,
            Price : data.Price,
            StartUpName: data.StartUpName,
            Ratings:data.Ratings,
            usp:data.usp})
        res.status(201).send("the product was added to our database successfully")
        console.log({productName,url,productCategory,Price,StartUpName,Ratings,usp});
        
    }catch(err){
        res.status(500).send("Something went wrong")
        console.log(err.message)
    }
})

route.get("/handlefindproduct", async (req, res) => {
    const { productName } = req.query;
    try {
      const findProduct = await Product.find({
        productName: { $regex: productName, $options: "i" }, // ✅ Case-insensitive search
      });
  
      if (findProduct.length === 0) {
        res.status(404).json([]); // ✅ Return an empty array if no product found
      } else {
        res.status(200).json(findProduct); // ✅ Return the found products array
      }
    } catch (err) {
      res.status(500).json({ error: "❌ Error finding the product." });
    }
  });

  
// ✅ Delete a product
route.delete("/handledeleteproduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting the product." });
  }
});

route.put("/handleupdateproduct/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product updated successfully.", updatedProduct });
  } catch (err) {
    res.status(500).json({ error: "Error updating the product." });
  }
});

  


module.exports = route