import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const ProductCard = ({ product }) => {

  const handleedit = async () => {
    const updatedData = {
      productName: prompt("Enter new product name:", product.productName),
      productCategory: prompt(
        "Enter new category:",
        product.productCategory
      ),
      Price: prompt("Enter new price:", product.Price),
      Ratings: prompt("Enter new rating:", product.Ratings),
      usp: prompt("Enter updated USP:", product.usp),
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/handleupdateproduct/${product._id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
      refreshProducts(); // Refresh product list after updating
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };
  
  const handledelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(
          `http://localhost:3000/handledeleteproduct/${product._id}`, // Correct URL with product._id
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Product deleted successfully!");
        refreshProducts(); // Refresh product list after deletion
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-72 text-center m-3">
      <img
        src={product.url}
        alt={product.productName}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mt-3">{product.productName}</h2>
      <p className="text-lg text-gray-700">Category: {product.productCategory}</p>
      <p className="text-lg text-green-600 font-bold">₹{product.Price}</p>
      <p className="text-sm text-gray-500">⭐ {product.Ratings}/5</p>
      <p className="text-sm text-gray-500">USP: {product.usp}</p>
      <div className="flex flex-row justify-evenly items-center h-10 mt-2">
        <button className="bg-blue-600 text-white w-10 rounded-lg flex justify-center items-center h-8" onClick={handleedit} ><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button className="bg-red-600 text-white w-10 rounded-lg flex justify-center items-center h-8" onClick={handledelete}><FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
    </div>
  );
};

export default ProductCard;
