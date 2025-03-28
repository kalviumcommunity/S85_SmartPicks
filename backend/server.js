const express = require('express');
const cors = require('cors'); // ✅ CORS middleware added
const app = express();
const port = 3000;

// Importing Routes and Models
const productRoute = require('./routes/product');
require('./model/db'); // MongoDB connection
const AddProduct = require('./routes/AdminProduct')

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Enable CORS for frontend requests
app.use(cors());


// ✅ Use product routes
app.use('/api', productRoute);
app.use('/',AddProduct)

// ✅ Start server on specified port
app.listen(port, () => {
  console.log(`🚀 The server is running on http://localhost:${port}`);
});
