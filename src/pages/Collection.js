import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/ShopContext';

const Collection = () => {
  const { Products, allcategory } = useAuth();
  const [color, setcolor] = useState("")
  const [price, setprice] = useState(0)
  const [category, setcategory] = useState('')
  // console.log(category);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterproducts = Products.filter(product =>
      (category  ? product.category === category : true) &&
      (price ? product.price < price : true) &&
      (color ? product.colors.includes(color) : true)
    );
    // if(filterproducts.length !== Products.length) {
    setFilteredProducts(filterproducts);
    // }
  }, [price, category]); // Include category and Products in the dependency array.

const resetfilter=()=>{
  // e.preventDefault();
  setprice(0)
  setcategory("")
  // setFilteredProducts(Products)
}
  return (
    <>
      <div class="flex min-h-screen bg-gray-100">

        <aside class="w-1/4 bg-white shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Filters</h2>

          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" name="category" value={category} onChange={(e) => setcategory(e.target.value)}
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option value="">Select category</option>
              {Array.isArray(allcategory) && allcategory.map((i) => (
                <option value={i.name}>{i.name}</option>
              ))}

            </select>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-medium text-gray-700 mb-2">Price</h3>({price})
            <input type="range" value={price} onChange={(e) => setprice(e.target.value)} min="0" max="20000" class="w-full accent-pink-500" />
            <div class="flex justify-between text-sm text-gray-500 mt-2">
              <span>₹0</span>
              <span>₹20,000</span>
            </div>
          </div>

          {/* <div class="mb-6">
            <h3 class="text-lg font-medium text-gray-700 mb-2">Color</h3>
            <div class="flex space-x-3">
              <button  value="red" onChange={()=>setcolor("red")} class="w-6 h-6 rounded-full   bg-red-500 border border-gray-300 focus:ring-2 focus:ring-pink-500"></button>
              <button value="blue" onChange={(e)=>setcolor(e.target.value)} class="w-6 h-6 rounded-full bg-blue-500 border border-gray-300 focus:ring-2 focus:ring-pink-500"></button>
              <button value="green" onChange={(e)=>setcolor(e.target.value)} class="w-6 h-6 rounded-full bg-green-500 border border-gray-300 focus:ring-2 focus:ring-pink-500"></button>
              <button value="yellow" onChange={(e)=>setcolor(e.target.value)} class="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300 focus:ring-2 focus:ring-pink-500"></button>
            </div>
          </div> */}


          <button onClick={()=>resetfilter()} class="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:ring-2 focus:ring-pink-500">
            Reset Filters
          </button>
        </aside>


        <main class="flex-1 p-6">
          <h1 class="text-2xl font-semibold text-gray-800 mb-6">Products  ******Price range ₹(0 to {price}) {category?`and category : ${category}`:<></>}******</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <div key={item} onClick={() => window.location.href = `/product/${item._id}`} className="group">
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/150" alt="Product" class="w-full h-48 object-cover" />
                  <div class="p-4">
                    <h3 class="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p class="text-gray-600">₹{item.price}</p>
                    <button class="w-full bg-pink-500 text-white py-2 mt-4 rounded-md hover:bg-pink-600 focus:ring-2 focus:ring-pink-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </main>
      </div>

    </>
  )
}

export default Collection
