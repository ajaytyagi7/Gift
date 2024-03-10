import React from 'react'
import './App.css'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter , Route, Routes, NavLink } from 'react-router-dom'
import UploadGift from './Component/UploadGift'
import Navbar from './Component/Navbar'
import ListGift from './Component/ListGift'
import GiftDetails from './Component/GiftDetails'
import Signup from './Component/Signup'
import Login from './Component/Login'

function App() {

  return (
    <>
     <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="UploadGift" element={<UploadGift/>} />
          <Route path="ListGift" element={<ListGift/>} />
          <Route path="GiftDetails/:id" element={<GiftDetails/>} />
          <Route path="Signup" element={<Signup/>} /> 
          <Route path="Login" element={<Login/>} /> 

          


        </Routes>
     </BrowserRouter>
     </SnackbarProvider>
    </>
  )
}

export default App
