import React from 'react'
import Header from './Header'
import '../CssComponents/Mainsection.css'
import { Link } from 'react-router-dom'
const Home = () => {

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <>
      <Header/>
  
            {/* Section 1 */}
            <section className='section-1'>
                <img src="MainImg-4.jpg" className='section1img' alt="Main" />
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

            {/*  review Section */}
           
            
        </>

  )
}

export default Home