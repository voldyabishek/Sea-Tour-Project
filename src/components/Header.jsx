import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";

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
            <h3>Bengal <span id='waters'>Waters</span></h3>
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
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <Link to="/Package"> <li className="nav-item"><a className="nav-link" href="#Package">Packages</a></li></Link>
              <li className="nav-item"><a className="nav-link" href="#resort">Resort</a></li>
              {/* <li className="nav-item"><a className="nav-link" href="#gallery">Guest says</a></li> */}
              {/* guest says  */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="guestSaysDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Visitor Stories
                </a>
                <ul className="dropdown-menu" aria-labelledby="guestSaysDropdown">
                  <Link to="/Review"> <li><a className="dropdown-item" href="#reviews">Reviews</a></li></Link>
                 <Link to="/Gallery"> <li><a className="dropdown-item" href="#gallery">Gallery</a></li></Link>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#booking">Booking</a></li>
              <li className="nav-item"><a className="nav-link" href="#Contact">Contact Us</a></li>
              <Link to="/Login"> <li className="nav-item" id="Login-icon"><IoMdPersonAdd className="Login" />LogIn Now</li>
              </Link>

            </ul>

          </div>
        </div>
      </nav>


    </>



  )
}

export default Header