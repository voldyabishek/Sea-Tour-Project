import React from 'react';
import { FaUmbrellaBeach, FaShip, FaCameraRetro, FaFish } from 'react-icons/fa';  // Import icons for modern look
import '../CssComponents/Services.css';  // Make sure to create and import the CSS file for styling

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Welcome to Our Services</h1>
        <p>Experience the best of nature, adventure, and cuisine!</p>
      </header>

      <div className="services">
        <h3>What We Offer</h3>
        <div className="services-cards">
          <div className="service-card">
            <FaUmbrellaBeach className="service-icon" />
            <h4>Scenic Resort Stays</h4>
            <p>Relax in our beautiful resorts with breathtaking views.</p>
          </div>
          <div className="service-card">
            <FaShip className="service-icon" />
            <h4>Thrilling Sea Tours</h4>
            <p>Explore the oceans with our exciting sea tours.</p>
          </div>
          <div className="service-card">
            <FaCameraRetro className="service-icon" />
            <h4>Unforgettable Beach Memories</h4>
            <p>Capture memories at the beach with our professional photographers.</p>
          </div>
          <div className="service-card">
            <FaFish className="service-icon" />
            <h4>Delicious Seafood</h4>
            <p>Indulge in the freshest seafood from the sea to your plate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
