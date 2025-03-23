import React, { useState, useEffect } from 'react';
import '../CssComponents/Resort.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Resort() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  const applyPromoCode = () => {
    if (promoCode === 'SEASIDE20') {
      setDiscount(20);
      alert('Promo code applied! 20% discount.');
    } else {
      setDiscount(0);
      alert('Invalid promo code.');
    }
  };

  const handleBooking = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Booking Details:', {
        checkInDate,
        checkOutDate,
        guests,
        selectedRoom,
        specialRequests,
        discount,
      });

      setBookingStatus('success');
      alert('Booking request submitted successfully!');

      setCheckInDate('');
      setCheckOutDate('');
      setGuests(1);
      setSelectedRoom('');
      setSpecialRequests('');
      setPromoCode('');
      setDiscount(0);

    } catch (error) {
      console.error('Booking failed:', error);
      setBookingStatus('error');
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="booking-page">
      <video autoPlay loop muted className="background-video">
        <source src="Video4.mp4" type="video/mp4" />
       
      </video>

      <div className="content-wrapper">
        <header className="booking-header">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          >
            Your Dream Sea Tour Resort Awaits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } }}
          >
            Book your unforgettable experience with us.
          </motion.p>
        </header>

        <section className="offers-section">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          >
            Exclusive Offers
          </motion.h2>
          <motion.div
            className="offer-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } }}
          >
            <h3>Summer Special</h3>
            <p>Book 7 nights and get 1 night free!</p>
          </motion.div>
          <motion.div
            className="offer-item"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' } }}
          >
            <h3>Honeymoon Package</h3>
            <p>Enjoy a romantic getaway with special discounts.</p>
          </motion.div>
        </section>

        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="booking-form-section"
        >
          <div className="booking-form-container">
            <h2>Make a Reservation</h2>
            <form className="booking-form">
              {/* ... (rest of the form) ... */}
              <div className="form-group">
                <label htmlFor="checkInDate">Check-in Date:</label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkOutDate">Check-out Date:</label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests:</label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="roomType">Room Type:</label>
                <select
                  id="roomType"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                >
                  <option value="">Select Room</option>
                  <option value="ocean-view-suite">Ocean View Suite</option>
                  <option value="deluxe-cabin">Deluxe Cabin</option>
                  <option value="family-room">Family Room</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g., Early check-in, special dietary needs"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="promoCode">Promo Code:</label>
                <div className="promo-input">
                  <input
                    type="text"
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                  />
                  <button type="button" onClick={applyPromoCode}>Apply</button>
                </div>
              </div>

              <button type="button" className="book-button" onClick={handleBooking}>
                Book Now
              </button>
              {bookingStatus === 'success' && <p className="success-message">Booking successful!</p>}
              {bookingStatus === 'error' && <p className="error-message">Booking failed. Please try again.</p>}
            </form>
          </div>
        </motion.section>

        <footer className="booking-footer">
          <p>&copy; {new Date().getFullYear()} Your Sea Tour Resort. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Resort;