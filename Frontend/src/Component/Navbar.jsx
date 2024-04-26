import React from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'
import useCartContext from '../CartContext'

const Navbar = () => {

  const { userloggedIn } = useUserContext();
  const { cartItems } = useCartContext();


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <a className="navbar-brand fs-3 fw-bold" href="/">Luxify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
      </li>
      
      <li className="nav-item">
                <NavLink className="nav-link" to="/ListGift">
                  Product
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About Us
                </NavLink>
      </li>
      
      
    
      </ul>

      <ul className="navbar-nav me-auto mb-2  mb-lg-0">
     
        {userloggedIn ? 
         <li className="nav-item">
         <NavLink className="nav-link " to="/Logout">
          <button className=' button-logout'>Logout</button>
         </NavLink>
       </li>:<>
       <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                <p className='text-dark fs-2'><i class="fa-solid fa-user"></i></p>

                
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  <button className='beautiful-button'>Signup</button>
                </NavLink>
      </li>
      </>
       }
         <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
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