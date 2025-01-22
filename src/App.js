import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetailPage from './pages/ProductDetailPage'
import AdminDashboard from './admin/AdminDashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Collection from './pages/Collection'
import NewArrival from './pages/NewArrival'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Pagenotfound from './pages/Pagenotfound'
import Search from './pages/Search'
import UserOrders from './user/UserOrders'
import UserDashboard from './user/UserDashboard'
import { AuthProvider } from './Context/ShopContext'
import AddProduct from './admin/AddProduct'
import AllProducts from './admin/AllProducts'
import AllUsers from './admin/AllUsers'
import ProtectRoute from './protect/ProtectRoute'
import CategoryCreate from './admin/CategoryCreate'
import CategoryProducts from './pages/CategoryProducts'
import AllMessages from './admin/AllMessages'
import Profile from './user/Profile'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes  >

            <Route path="/" element={<ProtectRoute><Home /></ProtectRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/collection" element={<ProtectRoute><Collection /></ProtectRoute>} />
            <Route path="/new-arrivals" element={<ProtectRoute><NewArrival /></ProtectRoute>} />
            <Route path="/contact" element={<ProtectRoute><Contact /></ProtectRoute>} />
            <Route path="/wishlist/:id" element={<ProtectRoute><Wishlist /></ProtectRoute>} />
            <Route path="/cart/:id" element={<ProtectRoute><Cart /></ProtectRoute>} />
            <Route path="/category/:name" element={<ProtectRoute><CategoryProducts /></ProtectRoute>} />
          <Route path="/checkout" element={<ProtectRoute><CheckOut /></ProtectRoute>} />
          <Route path="/product/:id" element={<ProtectRoute><ProductDetailPage /></ProtectRoute>} />
          <Route path="/admin" element={<ProtectRoute  role="admin"><AdminDashboard /></ProtectRoute>} />
          <Route path="/admin/add-product" element={<ProtectRoute  role="admin"><AddProduct /></ProtectRoute>} />
          <Route path="/admin/all-products" element={<ProtectRoute  role="admin"><AllProducts /></ProtectRoute>} />
          <Route path="/admin/all-users" element={<ProtectRoute  role="admin"><AllUsers /></ProtectRoute>} />
          <Route path="/admin/create-category" element={<ProtectRoute  role="admin"><CategoryCreate /></ProtectRoute>} />
          <Route path="/admin/contact" element={<ProtectRoute  role="admin"><AllMessages /></ProtectRoute>} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/search" element={<ProtectRoute><Search /></ProtectRoute>} />
          <Route path="/user/orders" element={<ProtectRoute><UserOrders /></ProtectRoute>} />
          <Route path="/user/dashboard" element={<ProtectRoute><UserDashboard /></ProtectRoute>} />
          <Route path="/user/profile" element={<ProtectRoute><Profile /></ProtectRoute>} />
        </Routes>
        <ToastContainer />
        <Footer />
      </Router>
    </AuthProvider >
    </>

  )
}

export default App
