import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/ShopContext'

const Home = () => {

  const { Products, allcategory } = useAuth();


  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1610030469983-98e550d6193c')] bg-cover bg-center">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Discover Timeless Elegance</h1>
              <p className="text-xl mb-8">Explore our exquisite collection of handcrafted sarees from India's finest artisans</p>
              <a href="/collection" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition duration-300">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
       
      
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Explore Our Categories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Category Card */}
          {allcategory.map((item) => (
            <div key={item._id} onClick={() => window.location.href = `/category/${item.name}`} className="group">

              <div
                class="relative h-52  rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  
                }}
              >
                <div class="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                <div class=" z-10 absolute bottom-4 left-4">
                  <h3 class="text-white text-xl font-bold">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* New Arrivals */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2> */}
          <div class="max-w-3xl mx-auto text-center mt-10 mb-4">
            <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-green-900">New Arrivals</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500"></span>
            </h1>
            <p class="text-lg text-gray-800 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Products.map((item) => (
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
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-pink-600 text-4xl mb-4">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders above ₹5000</p>
            </div>
            <div className="p-6">
              <div className="text-pink-600 text-4xl mb-4">
                <i className="fas fa-undo"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="p-6">
              <div className="text-pink-600 text-4xl mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
