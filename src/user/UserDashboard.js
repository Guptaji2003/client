import React from 'react'
import { useAuth } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const { user, logout } = useAuth();
    return (

        <div class="flex h-full bg-gray-100">

            <aside class="w-64 bg-pink-600 text-white flex flex-col">
                <div class="p-6 text-center border-b border-pink-700">
                    <h1 class="text-xl font-bold">User Dashboard</h1>
                </div>
                <nav class="flex-1 p-4 space-y-2">
                    <a href="#" class="block py-2 px-4 rounded hover:bg-pink-700">
                        Dashboard
                    </a>
                    <a href="/user/profile" class="block py-2 px-4 rounded hover:bg-pink-700">
                        Profile
                    </a>
                    <a href="#" class="block py-2 px-4 rounded hover:bg-pink-700">
                        Orders
                    </a>
                    <Link to={`/cart/${user?.id}`}>
                        <div class="block py-2 px-4 rounded hover:bg-pink-700">
                            Cart
                        </div>
                    </Link>
                    <Link to={`/wishlist/${user?.id}`}>
                        <div class="block py-2 px-4 rounded hover:bg-pink-700">
                            Wishlist
                        </div>
                    </Link>

                    <a href="#" class="block py-2 px-4 rounded hover:bg-pink-700">
                        Settings
                    </a>
                    <a href="/" onClick={logout} class="block py-2 px-4 rounded hover:bg-pink-700">
                        Logout
                    </a>
                </nav>
                <div class="p-4 text-center border-t border-pink-700">
                    <p class="text-sm">&copy; 2025 Saree Haven</p>
                </div>
            </aside>


            <main class="flex-1 p-6">

                <header class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Welcome, {user?.name}!</h2>
                    <p class="text-gray-600">Here's an overview of your account.</p>
                </header>

                <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div class="bg-white rounded-lg shadow p-6">
                        <h3 class="text-xl font-bold text-gray-800">Total Orders</h3>
                        <p class="text-4xl font-bold text-pink-600 mt-2">120</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <h3 class="text-xl font-bold text-gray-800">Cart Items</h3>
                        <p class="text-4xl font-bold text-yellow-500 mt-2">8</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <h3 class="text-xl font-bold text-gray-800">Wishlist Items</h3>
                        <p class="text-4xl font-bold text-green-500 mt-2">24</p>
                    </div>
                </section>


                <section>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                    <div class="bg-white rounded-lg shadow p-4">
                        <ul class="divide-y divide-gray-200">
                            <li class="py-4">
                                <p class="text-gray-800">You placed an order for a saree.</p>
                                <p class="text-sm text-gray-500">2 hours ago</p>
                            </li>
                            <li class="py-4">
                                <p class="text-gray-800">You added a product to your wishlist.</p>
                                <p class="text-sm text-gray-500">5 hours ago</p>
                            </li>
                            <li class="py-4">
                                <p class="text-gray-800">You updated your profile picture.</p>
                                <p class="text-sm text-gray-500">Yesterday</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default UserDashboard
