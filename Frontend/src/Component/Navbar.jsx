import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <NavLink className="nav-link" to="/GiftDetails">
                  ProductDetails
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Signup
                </NavLink>
      </li>
      <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
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