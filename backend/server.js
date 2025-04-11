const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// DB connection
require('./model/db');

// Import routes
const productRoute = require('./routes/product');
const userRoute = require('./routes/users'); // ✅ new

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Route usage
app.use('/api', productRoute);
app.use('/', userRoute); // ✅ enables /findbrand

// Start server
app.listen(port, () => {
  console.log(`🚀 The server is running on http://localhost:${port}`);
});
