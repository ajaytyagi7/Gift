import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
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
      <form class="d-flex" role="search">
        <input className="form-control me-2 border border-dark" type="search" placeholder="Search Gift" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar