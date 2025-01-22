import React from 'react'
import { useAuth } from '../Context/ShopContext';

const AllProducts = () => {
const {Products,getAllProducts}=useAuth();

const deleteProduct = async (productId) => {
  // console.log(categoryId );
  // console.log("hi");


  try {
      const response = await fetch(`http://localhost:5000/api/product/${productId}`, {
          method: "DELETE",

      });

      const data = await response.json();
      console.log("category deleted successfully:", data);

  } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching delete category.");
  }
  getAllProducts();
};


  return (
    <div>
       <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Products.map((item) => (
              <div key={item} /*onClick={() => window.location.href = `/product/${item}`}*/ className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c" alt={`Product ${item}`} className="w-full h-96 object-cover transition duration-300 group-hover:scale-110"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="w-full bg-white text-black py-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
               <button class="text-red-600 hover:text-red-800"  onClick={()=>deleteProduct(item._id)}>Delete</button>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
