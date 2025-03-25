import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../CssComponents/Navbar.css"
const Header = () => {

  return (
    <>
      {/* navbar */}

      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" id='navbar'>
        <div className="container">
          {/* logo image */}
          <a className="navbar-brand" href="#">
            <img src="logo-1.png" alt="Boat Logo" className="logo" />
          </a>
          {/* logo-text */}
          <div id='logo-text'>
            <h3>Sea<span id='waters'>Tour Project</span></h3>
          </div>
          {/* toggle-button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>




          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* home */}
              <Link to="/" className="link-tag">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li></Link>
              {/* packages */}
              <Link to="/Package"  className="link-tag"> <li className="nav-item"><a className="nav-link" href="#Package">Packages</a></li></Link>
              {/* resort */}
             <Link to="/Resort" className='link-tag'> <li className="nav-item"><a className="nav-link" href="#resort">Resort</a></li></Link>
              
              {/* Visitor Stories */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="guestSaysDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Visitor Stories
                </a>
                <ul className="dropdown-menu" aria-labelledby="guestSaysDropdown">
                  <Link to="/Review" className="link-tag"> <li><a className="dropdown-item" href="#reviews">Reviews</a></li></Link>
                 <Link to="/Gallery" className="link-tag"> <li><a className="dropdown-item" href="#gallery">Gallery</a></li></Link>
                </ul>
              </li>
              {/* booking  */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="guestSaysDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booking
                </a>
                <ul className="dropdown-menu" aria-labelledby="guestSaysDropdown">
                  <Link to="/Resort" className="link-tag"> <li><a className="dropdown-item" href="#reviews">Stays Booking</a></li></Link>
                 <Link to="/Booking" className="link-tag"> <li><a className="dropdown-item" href="#gallery">Activities Booking</a></li></Link>
                </ul>
              </li>
              {/* Login */}
              <Link  to="/Login"  className="link-tag"> 
              <li className="nav-item" >
              <button   id="Login-icon" className="nav-link" type="button">
                <IoMdPersonAdd className="Login"/>LogIn
                </button>
                </li>
              </Link>
              {/* contact */}
              <li> <p className="contact-items"> <FaPhone/>+91 7094578319</p>
                   <p className="contact-items"> <MdEmail/>Bengal Water01@gmail.com</p>
              </li>
            </ul>

          </div>
        </div>
      </nav>


    </>



  )
}

export default Header