const express = require('express');
const cors = require('cors'); // ✅ CORS middleware added
const app = express();
const port = 3000;

// Importing Routes and Models
const productRoute = require('./routes/product');
require('./model/db'); // MongoDB connection

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Enable CORS for frontend requests
app.use(cors());

// ✅ Ping route for health check
app.get('/ping', (req, res) => {
  res.status(200).send('✅ Server is up and running! Ping successful.');
});

// ✅ Use product routes
app.use('/api', productRoute);

// Global error handler for uncaught errors
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 404 Handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: '❌ Route not found!' });
});

// ✅ Start server on specified port
app.listen(port, () => {
  console.log(`🚀 The server is running on http://localhost:${port}`);
});
