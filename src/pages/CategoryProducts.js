import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../Context/ShopContext';

const CategoryProducts = () => {
    const { name } = useParams();
    const { Products, allcategory } = useAuth();
    const [categoryproducts, setcategoryproducts] = useState([])
    // console.log(name);

    useEffect(() => {
        const products = Products.filter((item) => item.category === name);
        setcategoryproducts(products);
        console.log(products);

    }, [Products])


    return (
        <div>
            <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Collection of {name}</h1>
                        <p className="text-lg text-gray-600">Discover our latest collection of exquisite sarees</p>
                    </div>

                    {/* New Arrivals Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* New Arrival Card 1 */}
                        {categoryproducts.map((item) => (
                            <div key={item} onClick={() => window.location.href = `/product/${item._id}`} className="group">
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c" alt={`Product ${item}`} className="w-full h-96 object-cover transition duration-300 group-hover:scale-110" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                                        <button className="w-full bg-white text-black py-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600">₹{item.price}</p>
                            </div>
                        ))
                        }


                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors">
                            View More Collections
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProducts
