import React from 'react'
import { Link } from 'react-router-dom'
import "../CssComponents/Booking.css"
import Package from './Package'

const Booking = () => {
  
  return (                                                                                

    <>  

      <section className='bookingform'>
      
        {/* form page */}
        <div className="form-container">
        <h2>Book Your Tour Package</h2>
        <form action="https://httpbin.org/post" method="post">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required/>

            <label for="destination">Select Destination:</label>
            <select id="destination" name="destination" required>
                <option value="">-- Choose a Destination --</option>
                <option value="paris">Paris, France</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="rome">Rome, Italy</option>
                <option value="maldives">Maldives</option>
            </select>

            <label for="date">Travel Date:</label>
            <input type="date" id="date" name="date" required/>

            <label for="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required/>

            <label for="message">Special Requests:</label>
            <textarea id="message" name="message" rows="4" placeholder="Any special requests..."></textarea>

            <button className='Booknow' >Book Now</button>
            <Link to="/"> <button className='cancel-btn'> Cancel Now</button></Link>
               </form>
               </div>
 
        </section>

         <div className='similerPackages'>
           <h2> Our Package  Details</h2>
           <div className='similerPackagesContainer'>
         <Package/>
             </div>
          </div>
          
   
      
    </>

  )
}

export default Booking