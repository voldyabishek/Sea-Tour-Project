import React, { useState } from 'react';
import '../CssComponents/Resort.css'; // Import the updated CSS file

function Resort() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleBooking = () => {
    console.log('Booking Details:', {
      checkInDate,
      checkOutDate,
      guests,
      selectedRoom,
    });
    alert('Booking request submitted!');
  };

  return (
    <div className="booking-page">
      <header className="booking-header">
        <h1>Your Dream Sea Tour Resort Awaits</h1>
        <p>Book your unforgettable experience with us.</p>
      </header>

      <section className="booking-form-section">
        <div className="booking-form-container">
          <h2>Make a Reservation</h2>
          <form className="booking-form">
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

            <button type="button" className="book-button" onClick={handleBooking}>
              Book Now
            </button>
          </form>
        </div>
      </section>

      <footer className="booking-footer">
        <p>&copy; {new Date().getFullYear()} Your Sea Tour Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Resort;