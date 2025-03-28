import React from "react";

const ProductCard = ({ product }) => {
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
    </div>
  );
};

export default ProductCard;
