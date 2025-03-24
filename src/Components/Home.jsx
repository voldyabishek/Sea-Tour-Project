import React from 'react'
import Navbar from './Navbar'
import '../CssComponents/Home.css'
import { Link } from 'react-router-dom'

import Services from './Services'
import Destination from './Destination'
// JQuaery for back to Top Button Script 
import "../JScomponent/imgCroses.js"

const Home = () => {

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    <>
      <Navbar />

      {/* Section 1 */}
      <section className='section-1'>
        {/* <img src="MainImg-4.jpg" classNameName='section1img' alt="Main" /> */}
        <video className='section1video' autoPlay loop muted>
          <source src="MainPage-Video.mp4" type="video/mp4" />

        </video>
        <div className='maintext'>
          <h3>Experience Fisherman Life & Adventures!</h3>

          <p>
            Thrilling sea tours with<br />
            scenic resort stays, where fishing,<br />
            fun, and unforgettable beach memories await!
          </p>
          <Link to="/Booking"><button className=" book-now" onClick={scrollToBooking}>Book Now</button></Link>
        </div>
      

      </section>

      <Services />
      {/* this div for croos scroling animation with image section */}
      <div className="skw-pages">
  <div className="skw-page skw-page-2">
    <div className="skw-page__half skw-page__half--left">
      <div className="skw-page__skewed">
        <div className="skw-page__content">
          <h2 className="skw-page__heading">Page 2</h2>
          <p className="skw-page__description">Nothing to do here, continue scrolling.</p>
        </div>
      </div>
    </div>
    <div className="skw-page__half skw-page__half--right">
      <div className="skw-page__skewed">
        <div className="skw-page__content">
        </div>
      </div>
    </div>
  </div>
  <div className="skw-page skw-page-3">
    <div className="skw-page__half skw-page__half--left">
      <div className="skw-page__skewed">
        <div className="skw-page__content"></div>
      </div>
    </div>
    <div className="skw-page__half skw-page__half--right">
      <div className="skw-page__skewed">
        <div className="skw-page__content">
          <h2 className="skw-page__heading">Page 3</h2>
          <p className="skw-page__description">The end is near, I promise!</p>
        </div>
      </div>
    </div>
  </div>
  <div className="skw-page skw-page-4">
    <div className="skw-page__half skw-page__half--left">
      <div className="skw-page__skewed">
        <div className="skw-page__content">
          <h2 className="skw-page__heading">Page 4</h2>
          <p className="skw-page__description">Ok, ok, just one more scroll!</p>
        </div>
      </div>
    </div>
    <div className="skw-page__half skw-page__half--right">
      <div className="skw-page__skewed">
        <div className="skw-page__content"></div>
      </div>
    </div>
  </div>
</div>
      <Destination />
 
    </>


  )
}

export default Home