const mongoose = require('mongoose');
require('dotenv').config();

// ✅ Connect to MongoDB using environment variable
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit if connection fails
  });

// ✅ Define Product Schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, '⚠️ Product name is required'],
    unique: true,
    trim: true,
  },
  productCategory: {
    type: String,
    required: [true, '⚠️ Product category is required'],
  },
  Price: {
    type: Number,
    required: [true, '⚠️ Price is required'],
    min: [1, '⚠️ Price must be at least 1'],
  },
  StartUpName: {
    type: String,
    required: [true, '⚠️ Startup name is required'],
  },
  Ratings: {
    type: Number,
    required: [true, '⚠️ Ratings are required'],
    min: [0, '⚠️ Ratings cannot be less than 0'],
    max: [5, '⚠️ Ratings cannot be more than 5'],
  },
  usp: {
    type: String,
    required: [true, '⚠️ Unique selling point (usp) is required'],
  },
});

// ✅ Create Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
