import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const notify = (msg) => toast(msg);
  const [product, setproduct] = useState([]);
  const { user ,cartcount} = useAuth();
  const { id } = useParams();
// console.log(cartcount);

  const getsingleproduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setproduct(data);
      // console.log("single Product fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching products.");
    }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      const userId = user.id;
      // console.log(userId);
      // Replace with actual userId (from context, auth, etc.)
      const response = await fetch(
        "http://localhost:5000/api/add-to-wishlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, productId, product }),
        }
      );
      const data = await response.json();
      console.log("ddfdf", data);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      // setMessage('An error occurred while adding to wishlist.');
      alert("An error occurred while fetching products.");
    }
    getsingleproduct();
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          user: { name: user.name, email: user.email },
          productId: productId,
          product,
          quantity: 1,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
      const data = await response.json();
      console.log("Product added to cart:", data);
      notify("Product added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred while fetching products.");
    }
    getsingleproduct();
  };

  const [cart, setcart] = useState([]);
  // console.log(cart.items);
  // console.log(user?.id);

  const getcart = async () => {
    const userId=user?.id;
    console.log(userId);
    
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(user?.id);
      const data = await response.json();
      setcart(data);
      console.log(data);
      console.log("Products fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching products.");
    }
  };

  useEffect(() => {
    getcart();
  }, [user]);

  const [wishproducts, setwishproducts] = useState([]);
  // console.log(wishproducts);

  const getwishlist = async () => {
    // try {
    //   const response = await fetch(`http://localhost:5000/api/wishlist/${user.id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch products");
    //   }
    //   const data = await response.json();
    //   // const wishnum = await data.reduce((acc, item) => acc + 1, 0);
    //   // acc[item] = (acc[item] || 0) + 1;
    //   // });
    //   // console.log(wishnum);
    //   setwishproducts(data);
    //   console.log("Products fetched successfully:", data);
    //   // Handle the fetched products (e.g., update state if using React)
    //   // setProducts(products);
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    //   alert("An error occurred while fetching products.");
    // }
  };

  useEffect(() => {
    getwishlist();
  }, [user]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
                alt="Banarasi Silk Saree"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* {product.map((item) => ( */}
              <img
                // key={item}
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
                // alt={`Product view ${item}`}
                className="h-24 w-full object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
              {/* ))} */}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-pink-600 mt-2">
                ₹{product.price}
              </p>
              <p className="text-xl font-serif text-blue-400 mt-2">
                {product.category}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Color</h3>
              <div className="flex space-x-3 mt-2">
                {Array.isArray(product.colors) &&
                  product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Size</h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {Array.isArray(product.sizes) &&
                  product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-md py-2 px-4 text-sm font-medium hover:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {Array.isArray(cart.items) &&
                cart.items?.length > 0 &&
                cart.items.find((item) => item.productId === product._id) ? (
                  <button
                    /*onClick={window.location.href(`/cart/${user.id}`)}*/ className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300"
                  >
                    Buy Now
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product._id)}
                    className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              <button
                onClick={() => handleAddToWishlist(product._id)}
                className="w-full border border-pink-600 text-pink-600 py-3 px-6 rounded-md hover:bg-pink-50 transition duration-300"
              >
                {Array.isArray(wishproducts.products) &&
                wishproducts.products?.length > 0 &&
                wishproducts.products.find(
                  (item) => item.productId._id === product._id
                )
                  ? "Added"
                  : "Add to Wishlist"}
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Product Description
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span>Free shipping on orders above ₹5000</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span>Easy 30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
