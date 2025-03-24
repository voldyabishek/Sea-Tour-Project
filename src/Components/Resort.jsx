import React, { useState, useEffect, useRef } from 'react';
import '../CssComponents/Resort.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Resort() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const offersRef = useRef(null);
  const bookingFormRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  // GSAP animations for scroll effects
  useEffect(() => {
    gsap.fromTo(
      offersRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: offersRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      bookingFormRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: bookingFormRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  const applyPromoCode = () => {
    if (promoCode === 'SEASIDE20') {
      setDiscount(20);
      alert('Promo code applied! 20% discount.');
    } else {
      setDiscount(0);
      alert('Invalid promo code.');
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

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

      // Reset all fields
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

        {/* Offers Section */}
        <section ref={offersRef} className="offers-section">
          <h2>Exclusive Offers</h2>
          <div className="offer-item">
            <h3>Summer Special</h3>
            <p>Book 7 nights and get 1 night free!</p>
            <img src="summer-img.jpeg" alt="Summer Special" />
          </div>
          <div className="offer-item">
            <h3>Honeymoon Package</h3>
            <p>Enjoy a romantic getaway with special discounts.</p>
            <img src="cpl-img.jpg" alt="Honeymoon Package" />
          </div>
          <div className="offer-item">
            <h3>Family Adventure</h3>
            <p>Special packages for families with kids.</p>
            <img src="   Family-img.jpg  " alt="Family Adventure" />
          </div>
        </section>

        {/* Booking Form Section */}
        <motion.section
          ref={bookingFormRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="booking-form-section"
        >
          <div className="booking-form-container">
            <h2>Make a Reservation</h2>
            <form onSubmit={handleBooking} className="booking-form">
              {/* Check-in Date */}
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

              {/* Check-out Date */}
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

              {/* Number of Guests */}
              <div className="form-group">
                <label htmlFor="guests">Number of Guests:</label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                  required
                />
              </div>

              {/* Room Type Selection */}
              <div className="form-group">
                <label htmlFor="roomType">Room Type:</label>
                <div className="room-cards">
                  <div
                    className={`room-card ${selectedRoom === 'ocean-view-suite' ? 'selected' : ''}`}
                    onClick={() => setSelectedRoom('ocean-view-suite')}
                  >
                    <img src="oceanSuit-img.jpg" alt="Ocean View Suite" />
                    <p>Ocean View Suite</p>
                  </div>
                  <div
                    className={`room-card ${selectedRoom === 'deluxe-cabin' ? 'selected' : ''}`}
                    onClick={() => setSelectedRoom('deluxe-cabin')}
                  >
                    <img src="seaCabin-img.jpg" alt="Deluxe Cabin" />
                    <p>Deluxe Cabin</p>
                  </div>
                  <div
                    className={`room-card ${selectedRoom === 'family-room' ? 'selected' : ''}`}
                    onClick={() => setSelectedRoom('family-room')}
                  >
                    <img src="familyRoom-img.jpg" alt="Family Room" />
                    <p>Family Room</p>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g., Early check-in, special dietary needs"
                ></textarea>
              </div>

              {/* Promo Code */}
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
                  <button type="button" onClick={applyPromoCode}>
                    Apply
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="book-button">
                Book Now
              </button>
              {bookingStatus === 'success' && <p className="success-message">Booking successful!</p>}
              {bookingStatus === 'error' && <p className="error-message">Booking failed. Please try again.</p>}
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Resort;
