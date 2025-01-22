import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, logout, user,cartcount } = useAuth();
  // console.log(user);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-pink-600">
                Chetna`s
              </a>
            </div>

            {/* Navigation Links */}
            {isAuthenticated && (<>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  Home
                </a>
                <a href="/collection" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  Collection
                </a>
                <a href="/new-arrivals" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  New Arrivals
                </a>
                {/* <a href="/traditional" className="text-gray-700 hover:text-pink-600 transition duration-300">
              Traditional
            </a> */}
                <a href="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  Contact
                </a>
              </div>


              <div className="flex items-center space-x-4">

                <a href="/search" className="text-gray-600 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
                <div className="text-gray-600 hover:text-pink-600" onClick={() => document.getElementById('accountBar').classList.toggle('hidden')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div id="accountBar" className="hidden absolute z-50 bg-white shadow-md p-4 w-48">
                    <ul>
                      {user.role === "admin" ? (<li><a href="/admin" className="block py-2 hover:bg-gray-100">Admin</a></li>) : <>
                        <li><a href="/user/dashboard" className="block py-2 hover:bg-gray-100">Dashboard</a></li>
                      </>}
                      <li><a href="/account" className="block py-2 hover:bg-gray-100">Account</a></li>
                      <li><a href="/user/orders" className="block py-2 hover:bg-gray-100">Orders</a></li>
                      <li><a href="/login" onClick={logout} className="block py-2 hover:bg-gray-100">Logout</a></li>
                    </ul>
                  </div>
                </div>
                <a  href={`/cart/${user?.id}`} className="text-gray-600  hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </a>
                
                
                <Link to={`/wishlist/${user?.id}`}>
                  <div className="text-gray-600 hover:text-pink-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </>
            )}
            {!isAuthenticated &&
              <a
                href="/login"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300"
              >
                Login
              </a>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
