import React from 'react'

const CheckOut = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            {/* Order Item */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="https://example.com/saree1.jpg" alt="Saree" className="w-12 h-12 object-cover rounded-full mr-2"/>
                <div>
                  <p className="text-sm font-medium">Saree Name</p>
                  <p className="text-xs text-gray-500">Quantity: 1</p>
                </div>
              </div>
              <p className="text-sm font-medium">$99.99</p>
            </div>
            {/* Repeat Order Item */}
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Subtotal: <span className="text-pink-600">$199.99</span></p>
            <p className="text-sm font-medium">Shipping: <span className="text-pink-600">Free</span></p>
            <p className="text-sm font-medium">Total: <span className="text-pink-600">$199.99</span></p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="text" name="phone" id="phone" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea id="address" name="address" rows="3" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select id="paymentMethod" name="paymentMethod" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Visa</option>
                <option>Mastercard</option>
                <option>PayPal</option>
              </select>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CheckOut
