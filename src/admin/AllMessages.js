import React, { useEffect, useState } from 'react'

const AllMessages = () => {
    const [allmessages, setallmessages] = useState([])
    const getmessage = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/all-contacts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setallmessages(data);
            console.log("categories fetched successfully:", data);

            // Handle the fetched products (e.g., update state if using React)
            // setProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching products.");
        }
    };

    useEffect(() => {
        getmessage();
    }, [])

    const deleteMessage = async (contactId) => {
        // console.log(categoryId );
        console.log("hi");


        try {
            const response = await fetch(`http://localhost:5000/api/contact/${contactId}`, {
                method: "DELETE",

            });

            const data = await response.json();
            console.log("category deleted successfully:", data);

        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching delete category.");
        }
        getmessage();
    };

    return (
        <div>
            <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Messages</h1>

                {allmessages && allmessages.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">#</th>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Name</th>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Phone</th>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Email</th>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Message</th>
                                    <th className="px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...allmessages].reverse().map((msg, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{index + 1}</td>
                                        <td className="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{msg.name}</td>
                                        <td className="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{msg.phone}</td>
                                        <td className="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{msg.email}</td>
                                        <td className="px-4 py-3 border border-gray-200 text-gray-600 text-sm">{msg.message}</td>
                                        <td class="text-red-600 hover:text-red-800 px-4 py-3 border border-gray-200  text-sm" onClick={() => deleteMessage(msg._id)}>Delete</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
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
                        <p className="text-gray-600 text-lg">No messages available yet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllMessages
