import React, { useState } from 'react'
import { useAuth } from '../Context/ShopContext'
import { toast } from 'react-toastify';

const AddProduct = () => {
      const notify = (msg) => toast(msg);
    const [name, setname] =useState('')
    const [price, setprice] =useState('')
    const [category, setcategory] =useState('')
    const [image, setimage] =useState('')
    const [sizes, setsizes] =useState([''])
    const [colors, setcolors] =useState([''])
    const [description, setdescription] =useState('');
const {Products,allcategory}=useAuth();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, category, image, sizes, colors, description }),
            });
            const data = await response.json();
            console.log(data);
notify("Product added successfully")
            // alert("product added successfull...");
        } catch (error) {
            console.error('Sign up error:', error);
        }
    };



    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
                <div class="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    <h2 class="text-2xl font-bold mb-6 text-gray-700">Add Product</h2>

                    <form class="space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Product Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter product name"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>


                        <div>
                            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                            <select id="category" name="category" value={category} onChange={(e)=>setcategory(e.target.value)} 
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option value="">Select category</option>
                                {Array.isArray(allcategory) && allcategory.map((i)=>(
                                <option value={i.name}>{i.name}</option>
                                ))}
                                
                            </select>
                        </div>


                        <div>
                            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                            <input type="number" value={price} onChange={(e)=>setprice(e.target.value)}  id="price" name="price" placeholder="Enter price"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>


                        <div>
                            <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
                            <input type="text" value={image} onChange={(e)=>setimage(e.target.value)}  id="image" name="image"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm sm:text-sm file:bg-blue-500 file:text-white file:border-none file:rounded-md" />
                        </div>


                        <div>
                            <label for="colors" class="block text-sm font-medium text-gray-700">Colors</label>
                            <input type="text" value={colors} onChange={(e)=>setcolors(e.target.value)}  id="colors" name="colors" placeholder="e.g., Red, Blue, Black"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div>
                            <label for="sizes" class="block text-sm font-medium text-gray-700">Sizes</label>
                            <input type="text" value={sizes} onChange={(e)=>setsizes(e.target.value)}  id="sizes" name="sizes" placeholder="e.g., S, M, L, XL"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>


                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea id="description" value={description} onChange={(e)=>setdescription(e.target.value)}  name="description" rows="4" placeholder="Enter product description"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                        </div>


                        {/* <div>
                            <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
                            <input type="number" id="quantity" name="quantity" placeholder="Enter quantity"
                                class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div> */}


                        <div>
                            <button type="submit"
                                class="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddProduct
