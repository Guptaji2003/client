import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);

    const login = (user, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(true);
        setUser(user);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            setIsAuthenticated(true);
            setUser(JSON.parse(user));
            setToken(token);
        }
    };

    React.useEffect(() => {
        checkAuth();
        
    }, [token]);


    const [Products, setProducts] = useState([])
    const getAllProducts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/all-products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setProducts(data);
            // console.log("Products fetched successfully:", data);

            // Handle the fetched products (e.g., update state if using React)
            // setProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching products.");
        }
    };


    const [Users, setUsers] = useState([])
    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/all-users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setUsers(data);
            // console.log("Products fetched successfully:", data);

            // Handle the fetched products (e.g., update state if using React)
            // setProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching products.");
        }
    };

    const [allcategory, setallcategory] = useState([])

    const getcategory = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/categories", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            setallcategory(data);
            // console.log("categories fetched successfully:", data);

            // Handle the fetched products (e.g., update state if using React)
            // setProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching products.");
        }
    };

    useEffect(() => {
        getcategory();
    }, [])


    useEffect(() => {
        getAllProducts();
        getAllUsers();
    }, [])
    
const [cartcount, setcartcount] = useState(0)
const getcart = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/cart/${user.id}`, {
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
        // settotalquantity(tq);
        setcartcount(tq)
        console.log(tq);
        
        const st = data.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
        // setsubtotal(st);
        // setcart(data);
        //   setwishproducts(data);
        console.log("Products fetched successfully:", data);

    } catch (error) {
        console.error("Error fetching products:", error);
        // alert("An error occurred while fetching products.");
    }
};
useEffect(() => {
   getcart();
}, [user])
    return (
        <AuthContext.Provider value={{ login, user,setUser, token, logout, checkAuth, isAuthenticated, Products, Users, allcategory,getAllProducts,cartcount }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
