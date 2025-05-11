const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// DB connection
require('./model/db');

// Import routes
const productRoute = require('./routes/product');
const authRoute = require('./routes/users2'); // ✅ renamed for JWT + cookie auth

// Middleware
app.use(cors({
  origin: true, // or: 'http://localhost:5173' if using Vite/React
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route usage
app.use('/api', productRoute);
app.use('/', authRoute); // ✅ handles /register and /login from user2.js

// Start server
app.listen(port, () => {
  console.log(`🚀 The server is running on http://localhost:${port}`);
});
