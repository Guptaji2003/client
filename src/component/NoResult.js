import React from 'react'

const NoResult = () => {
  return (
    <div>
      <div class="flex flex-col items-center justify-center min-h-screen bg-white">
  {/* <!-- Icon or Image --> */}
  {/* <div class="w-40 h-40">
    <img src="https://via.placeholder.com/150" alt="No Results Found" class="object-cover"/>
  </div> */}

  {/* <!-- Message --> */}
  <h1 class=" text-2xl font-semibold text-gray-800">No Results Found</h1>
  <p class="mt-2 text-gray-600">
    We couldn't find any results for your search. Please try again with a different query.
  </p>

  {/* <!-- Button --> */}
  <button class="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
    Retry Search
  </button>
</div>
    </div>
  )
}

export default NoResult
