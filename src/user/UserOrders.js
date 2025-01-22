import React from 'react'

const UserOrders = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Your Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Item */}
        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <img src="https://example.com/saree1.jpg" alt="Saree" className="w-12 h-12 object-cover rounded-full"/>
            <div>
              <p className="text-sm font-medium">Saree Name</p>
              <p className="text-xs text-gray-500">Order Date: 2023-02-15</p>
              <p className="text-xs text-gray-500">Status: Delivered</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Total: <span className="text-pink-600">$99.99</span></p>
          </div>
        </div>
        {/* Repeat Order Item */}
      </div>
    </div>
    </div>
  )
}

export default UserOrders
