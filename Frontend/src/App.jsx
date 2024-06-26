import React from 'react'
import './App.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import UploadGift from './Component/UploadGift'
import Navbar from './Component/Navbar'
import ListGift from './Component/ListGift'
import GiftDetails from './Component/GiftDetails'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Home from './Component/Home'
import Footer from './Component/Footer'
import ManageGift from './Component/ManageGift'
import { CartProvider } from './CartContext'
import Cart from './Component/Cart'
import Logout from './Component/Logout'
import { UserProvider } from './UserContext'
import Contact from './Component/Contact'
import About from './Component/About'
import Checkout from './Component/Checkout'
import Payment from './Component/Payment'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
          <CartProvider>
            <Navbar />
            <Routes>

              <Route path="Home" element={<Home />} />
              <Route path="/" element={<Home />} />

              <Route path="UploadGift" element={<UploadGift />} />
              <Route path="ListGift" element={<ListGift />} />
              <Route path="GiftDetails/:id" element={<GiftDetails />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Login" element={<Login />} />
              <Route path="ManageGift" element={<ManageGift />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Logout" element={<Logout />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path="Checkout" element={<Checkout />} />
              <Route path="Payment" element={<Payment />} />









            </Routes>
          </CartProvider>
          <Footer />
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
