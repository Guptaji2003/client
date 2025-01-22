import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../Context/ShopContext';

const Cart = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [subtotal, setsubtotal] = useState(0)
    const tax = 4;
    const shipping = "Free";
    const [cart, setcart] = useState([]);
    const [totalquantity, settotalquantity] = useState(0)
    const getcart = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            const tq = data.items.reduce((acc, item) => acc + item.quantity, 0);
            settotalquantity(tq);
            // setcartcount(tq)
            console.log(tq);
            
            const st = data.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
            setsubtotal(st);
            setcart(data);
            //   setwishproducts(data);
            console.log("Products fetched successfully:", data);

        } catch (error) {
            console.error("Error fetching products:", error);
            // alert("An error occurred while fetching products.");
        }
    };

    const clearcart = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/deletecart/${id}`, {
                method: "DELETE",
               
            });

            const data = await response.json();
            console.log("cart cleared successfully:", data);
        } catch (error) {
            console.error("Error fetching products:", error);
       
        }
        getcart();
    };

    useEffect(() => {
        getcart();
    }, [])

    return (<>
        <div class="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h1 class="text-4xl font-semibold text-gray-800">
                🛒{user?.name.split(" ").slice(0, 1)}`s  Cart
            </h1>
            <p class="text-sm text-gray-600 mt-2">
                Review your items and get ready to checkout!
            </p>
        </div>
        {(cart.items && cart.items.length > 0) ?
            (<div class="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-50 min-h-screen flex items-center justify-center">


                <div class="container mx-auto p-6 flex flex-row mt-4">

                    <div class="flex-1">
                        <div class="bg-white shadow-xl rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto">
                            <div class="flex justify-between items-center mb-8">
                                {/* <h1 class="text-3xl font-bold text-gray-800">Your Cart</h1> */}
                                <button onClick={()=>clearcart()} class="text-sm font-medium text-purple-600 hover:text-purple-800 transition">Clear Cart</button>
                            </div>

                            <div class="space-y-6">

                                {Array.isArray(cart.items) && cart.items.map((item) => (
                                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <img src="https://via.placeholder.com/100" alt="Saree Image" class="w-24 h-24 object-cover rounded-lg" />
                                        <div class="flex-1">
                                            <h2 class="text-lg font-medium text-gray-700">{item.product.name}</h2>
                                            <p class="text-sm text-gray-500">Category:{item.product.category} </p>
                                            <p class="text-sm mt-2 text-gray-800 font-semibold">${item.product.price}</p>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <button class="w-16 h-10 border-gray-300 rounded-md text-center shadow-sm focus:ring-purple-500 focus:border-purple-500">-</button>
                                                <span class="mx-4">{item.quantity}</span>
                                                <button class="w-16 h-10 border-gray-300 rounded-md text-center shadow-sm focus:ring-purple-500 focus:border-purple-500">+</button>
                                            </div>
                                            <button class="text-sm font-medium text-purple-600 hover:text-purple-800 transition">Remove</button>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>
                    </div>
                    <div class="flex-1 static ml-4">
                        <div class="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl shadow-lg text-white">
                            <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
                            <div class="space-y-4">
                                <div class="flex justify-between">
                                    <p class="text-sm">Subtotal</p>
                                    <p class="font-medium">${subtotal}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-sm">Tax</p>
                                    <p class="font-medium">${tax}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-sm">Shipping</p>
                                    <p class="font-medium">{shipping}</p>
                                </div>
                                <div class="border-t border-purple-300 mt-4 pt-4 flex justify-between text-lg font-bold">
                                    <p>Total</p>
                                    <p>${subtotal + tax}</p>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between">
                                <button class="px-6 py-3 bg-gray-100 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Continue Shopping</button>
                                <button class="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
            :
            (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-gray-400 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="text-gray-600 text-lg">No product added yet.</p>
                </div>
            )
        }
    </>
    )
}

export default Cart
