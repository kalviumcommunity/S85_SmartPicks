import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayData.css';

const DisplayData = () => {
  const [products, setProducts] = useState([]);

  // ✅ Fetching product data from backend
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/get'); // ✅ Correct API URL
      setProducts(response.data);
    } catch (error) {
      console.error('❌ Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">📦 Product List</h1>
      {products.length === 0 || products.message ? (
        <p>⚠️ No data found. Please add some products.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Startup Name</th>
              <th>Ratings ⭐</th>
              <th>USP 🔥</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>₹{product.Price}</td>
                <td>{product.StartUpName}</td>
                <td>{product.Ratings}/5</td>
                <td>{product.usp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayData;
