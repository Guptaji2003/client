import React from 'react'

const Pagenotfound = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">It seems like the page you're looking for doesn't exist. Don't worry, it happens to the best of us!</p>
        <a href="/" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors">
          Go Home
          <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10l2.4-2H15" />
          </svg>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Pagenotfound
