import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Wishlist = () => {
  const [wishproducts, setwishproducts] = useState([])
  const { id } = useParams();

  const getwishlist = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/wishlist/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      // const wishnum = await data.reduce((acc, item) => acc + 1, 0);
      // acc[item] = (acc[item] || 0) + 1;
      // });
      // console.log(wishnum);

      setwishproducts(data);
      console.log("Products fetched successfully:", data);

      // Handle the fetched products (e.g., update state if using React)
      // setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching products.");
    }
  };

  useEffect(() => {
    getwishlist();
  }, [])



  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Your Wishlist</h2> */}
        <div class="bg-pink-100 p-4 mb-8 rounded-lg shadow-sm text-center">
          <h1 class="text-4xl font-semibold text-pink-600">
            ❤️ Your Wishlist
          </h1>
          <p class="text-sm text-pink-500 mt-2">
            Save your favorite items and shop them later!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wishlist Item */}
          {Array.isArray(wishproducts.products) && wishproducts.products.map((item) => (
            <div key={item} onClick={() => window.location.href = `/product/${item._id}`} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c" alt={`Product ${item}`} className="w-full h-96 object-cover transition duration-300 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-full bg-white text-black py-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.product.name}</h3>
              <p className="text-gray-600">₹{item.product.price}</p>
            </div>
          ))}
          {/* Repeat Wishlist Item */}
        </div>
        <div className="text-center mt-8">

          <a href="/cart" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors">
            View Cart
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10l3.6 7.7c.6.6 1.4 1.2 2.1 1.5l1.3-1.3c.4-.4.7-1 .7-1.5V6H19c1.1 0 2-.9 2-2v-4H5v4h14z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
