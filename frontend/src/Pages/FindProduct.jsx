import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard"; // ✅ Correct Import

const FindProduct = () => {
  // ✅ State to store input value
  const [input, setInput] = useState("");

  // ✅ State to store fetched product data
  const [products, setProducts] = useState([]);

  // ✅ Handle form submission properly
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      console.log("❌ Product name cannot be empty!");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/handlefindproduct`, {
        params: { productName: input },
      });

      console.log("✅ The data was fetched successfully:", response.data);
      setProducts(response.data); // ✅ Store product data in state
    } catch (error) {
      console.error("❌ Unable to find the product:", error.message);
      setProducts([]); // Reset if no product found
    }
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div
        className="min-h-min h-screen"
        style={{
          backgroundImage: "URL('/IMG.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center w-full"
          >
            <div className="flex w-[40%] backdrop-blur-lg bg-white/30 shadow-lg h-15 justify-center rounded-3xl border-3 border-black/20 text-xl font-bold text-white/80 mt-10">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                className="w-full rounded-3xl text-center text-2xl"
                placeholder="Search Product"
              />
              <button type="submit" className="text-3xl w-20">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>

        {/* ✅ Render Product Cards after fetching data */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {products.length > 0 ? (
            products.map((item, index) => (
              <ProductCard key={index} product={item} /> // ✅ Pass correct prop to ProductCard
            ))
          ) : (
            <p className="text-white text-2xl mt-5">❌ No products found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FindProduct;
