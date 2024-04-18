import React from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'

const Navbar = () => {

  const { userloggedIn } = useUserContext();


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
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
                <NavLink className="nav-link" to="/UploadGift">
                  UploadProduct
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/ListGift">
                  Product
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/ManageGift">
                  Manage
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  cart
                </NavLink>
      </li>
    
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userloggedIn ? 
         <li className="nav-item">
         <NavLink className="nav-link " to="/Logout">
          <button className='p-1 btn btn-danger'>Logout</button>
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
      
      
      
     
      </ul>
     
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar