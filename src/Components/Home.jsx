import React from 'react'
import Header from './Header'
import '../CssComponents/Mainsection.css'
import { Link } from 'react-router-dom'

import Section2 from './Section2'
const Home = () => {

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header />

      {/* Section 1 */}
      <section className='section-1'>

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

      {/* <img src="MainImg-4.jpg" className='section1img' alt="Main" /> */}

<Section2/>

    </>

  )
}

export default Home