import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'
import useCartContext from '../CartContext'
import { useState } from 'react'

const Navbar = () => {

  const { userloggedIn } = useUserContext();
  const { cartItems } = useCartContext();

const [open, setopen] = useState(false)  

const closeNav = () => {
  setopen(false)
};



  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid  ">
    <a className="navbar-brand fs-3 fw-bold" href="/">Luxify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setopen(!open)}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={open?"collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0" >
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/Home">
                  Home
                </NavLink>
      </li>
      
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/ListGift">
                  Product
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/Contact">
                  Contact Us
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/About">
                  About Us
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/Checkout">
                  Checkout
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" onClick={closeNav} to="/Payment">
                  Payment
                </NavLink>
      </li>
      
      
    
      </ul>

      <ul className="navbar-nav me-auto mb-2  mb-lg-0 mx-5">
     
        {userloggedIn ? 
         <li className="">
         <NavLink className="nav-link " onClick={closeNav} to="/Logout">
          <button className=' button-logout'>Logout</button>
         </NavLink>
       </li>:<>
       <li className="">
                <NavLink className="nav-link" onClick={closeNav} to="/Login">
                <p className='text-dark fs-2'><i class="fa-solid fa-user"></i></p>

                
                </NavLink>
      </li>
      <li className="">
                <NavLink className="nav-link" onClick={closeNav} to="/Signup">
                  <button className='beautiful-button'>Signup</button>
                </NavLink>
      </li>
      </>
       }
         <li className="">
                <NavLink className="nav-link" onClick={closeNav} to="/cart">
                <p type="button" className=" position-relative">
                <p className='text-dark fs-3 p-1' ><i className="fa-solid fa-cart-shopping"></i></p>
                
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
                </p>
                </NavLink>
      </li>
   
      
      
      
     
      </ul>
     
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar