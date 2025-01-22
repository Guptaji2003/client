import React from 'react'
import { useAuth } from '../Context/ShopContext';

const AllUsers = () => {
    const { Users } = useAuth();

    return (
        <div>
            <div class="container mx-auto p-6">
                <h1 class="text-2xl font-bold mb-6">All Users</h1>

                <div class="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table class="min-w-full table-auto">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="py-3 px-6 text-left text-sm font-medium text-gray-600">Name</th>
                                <th class="py-3 px-6 text-left text-sm font-medium text-gray-600">Email</th>
                                <th class="py-3 px-6 text-left text-sm font-medium text-gray-600">Role</th>
                                <th class="py-3 px-6 text-left text-sm font-medium text-gray-600">Status</th>
                                {/* <th class="py-3 px-6 text-center text-sm font-medium text-gray-600">Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((item) => (
                                <tr class="border-b">
                                    <td class="py-3 px-6 text-sm font-medium text-gray-800">{item.name}</td>
                                    <td class="py-3 px-6 text-sm text-gray-600">{item.email}</td>
                                    <td class="py-3 px-6 text-sm text-gray-600">{item.role}</td>
                                    <td class="py-3 px-6 text-sm text-green-600">Active</td>
                                    {/* <td class="py-3 px-6 text-center">
                                        <button class="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                                        <button class="text-red-500 hover:text-red-700">Delete</button>
                                    </td> */}
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default AllUsers
