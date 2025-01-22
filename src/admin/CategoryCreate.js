import React, { useState } from 'react'
import { useAuth } from '../Context/ShopContext';

const CategoryCreate = () => {

  const [name, setname] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('');
const {Products,allcategory}=useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/add-category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, image, description }),
      });
      const data = await response.json();
      console.log(data);
      window.location.reload();

      // alert("product added successfull...");
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const deleteCategory = async (categoryId) => {
    console.log(categoryId );
    console.log("hi");
    
    
    try {
        const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`, {
            method: "DELETE",
            
        });

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        // setallcategory(data);
        console.log("category deleted successfully:", data);
        window.location.reload();

        // Handle the fetched products (e.g., update state if using React)
        // setProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        alert("An error occurred while fetching delete category.");
    }
    // getcategory();
};

  return (
    <div>
      <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-semibold text-gray-800 mb-4">Create Category</h1>
        <form id="categoryForm" class="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Category Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Enter category name"
              required />
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={description}
              onChange={(e)=>setdescription(e.target.value)}
             
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Enter category description"></textarea>
          </div>


          <div>
            <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={(e)=>setimage(e.target.value)}
             
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Enter image URL" />
          </div>


          <div>
            <button
              type="submit"
              class="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
              Create Category
            </button>
          </div>
        </form>
      </div>

      <div class="container mx-auto mt-8 mb-8">
  <h1 class="text-2xl font-semibold text-gray-800 mb-6">All Categories</h1>
  <div class="overflow-x-auto bg-white shadow-md rounded-lg">
    <table class="w-full border-collapse border border-gray-200 text-left">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">#</th>
          <th class="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Name</th>
          <th class="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Description</th>
          <th class="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Image</th>
          <th class="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(allcategory) && allcategory.map((item,index)=>(
             <tr>
             <td class="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{index+1}</td>
             <td class="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{item.name}</td>
             <td class="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{item.description}</td>
             <td class="px-4 py-3 border border-gray-200 text-gray-600 text-sm">
               <img src="https://via.placeholder.com/50" alt="Category" class="w-10 h-10 object-cover rounded"/>
             </td>
             <td class="px-4 py-3 border border-gray-200 text-gray-600 text-sm">
               {/* <button class="text-blue-600 hover:text-blue-800 mr-2">Edit</button> */}
               <button class="text-red-600 hover:text-red-800"  onClick={()=>deleteCategory(item._id)}>Delete</button>
             </td>
           </tr>
            ))}
        
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default CategoryCreate
