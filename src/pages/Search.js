import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NoResult from '../component/NoResult';

const Search = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/api/search`, {
        params: { query }
      });
      // const data=await response.json();
      setResults(response.data);
      console.log(response.data);

    } catch (err) {
      setError('Error fetching search results.');
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //  handleSearc0h(e);
  // }, [query])
  


  return (
    
  <>
    <div>
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-3xl font-bold text-center mb-8">Search for Your Dream Saree</h2>
        <div className=" flex justify-center  items-center space-x-4">
          <form action="" onSubmit={handleSearch} className='w-[50%] flex' >
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, color, or fabric" className="w-[100%] pl-3 pr-3 py-2 border border-gray-300 rounded-l-3xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <button type='submit' className="w-1/4 bg-pink-600 rounded-r-3xl hover:bg-pink-700 text-white py-2 px-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Search
            </button>
          </form>
        </div>
        <div className="mt-8">
         {results.length > 0 && results ? (<>
           <h3 className="text-xl font-semibold mb-4">Search Results</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Search Result Item */}
             {results.map((item) => (
               <div key={item} onClick={() => window.location.href = `/product/${item}`} className="group">
                 <div className="relative overflow-hidden rounded-lg mb-4">
                   <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c" alt={`Product ${item}`} className="w-full h-96 object-cover transition duration-300 group-hover:scale-110"/>
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
             {/* Repeat Search Result Item */}
           </div>
           </>
         ):<NoResult/>
         }
        </div>
      </div>
    </div>
  </>
  )
}

export default Search
