import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch usernames
  useEffect(() => {
    fetch('http://localhost:3000/findbrand')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedUser) return;
  
    fetch(`http://localhost:3000/findproducts/${selectedUser}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  };
  

  return (
    <div
      style={{
        backgroundImage: "url('/IMG.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen w-full flex flex-col items-center"
    >
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full mt-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] p-8 rounded-3xl backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 transition duration-300 ease-in-out"
        >
          <h2 className="text-white text-3xl font-extrabold text-center mb-6 drop-shadow-md">
            Select Brand
          </h2>

          <label htmlFor="users" className="block mb-2 text-white font-semibold text-lg tracking-wide">
            Select Startup Brand
          </label>

          <select
            id="users"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-3 rounded-xl text-base font-medium bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <option value="">-- Select a User --</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full mt-6 flex justify-center items-center gap-2 bg-white text-black font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search
          </button>
        </form>

        {/* Display Products */}
        {products.length > 0 && (
          <div className="mt-10 w-full max-w-2xl">
            <h3 className="text-white text-2xl font-bold mb-4">Products by {selectedUser}</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="bg-white/80 text-black p-4 rounded-xl shadow-md font-medium text-lg"
                >
                  {product.productName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
