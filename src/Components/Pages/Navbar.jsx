import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    {/* #3b83bd*/}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{background: '#264a82', color:'#000'}}>
  <div class="container-fluid">
    <Link to='/' class="navbar-brand me-auto ">LOGO</Link>


    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{border: 'none'}}></span>
    </button>
    <div className="sidebar offcanvas offcanvas-start " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-4" id="offcanvasDarkNavbarLabel">LOGO</h5>
        <button type="button" className="btn-close btn-close-white shadow-none fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            
          <li class="nav-item" >
            <Link to='/' className="nav-link fs-5" aria-current="page">Home</Link>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li className="nav-item">
            <Link to='/about' className="nav-link fs-5">About</Link>
            <li><hr className="dropdown-divider"/></li>
          </li>
          
          <li className="nav-item">
            <Link to='/tours' className="nav-link fs-5">Tours</Link>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li className="nav-item">
            <Link to='/gallery' className="nav-link fs-5" >Gallery</Link>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li className="nav-item fs-5">
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>

    
        </ul>
      </div>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar