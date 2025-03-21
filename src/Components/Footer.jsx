import React from 'react';
import '../CssComponents/Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer className="advanced-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">About Sea Tours</h3>
          <p>
            We specialize in unforgettable sea tours, offering a range of experiences from relaxing cruises to adventurous diving expeditions. Explore the beauty of the ocean with us.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Ocean View Street, Seaside City
          </p>
          <p>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@seatours.com
          </p>
        </div>

        <div className="footer-section newsletter">
          <h3 className="footer-title">Newsletter</h3>
          <p>Subscribe to our newsletter for updates and special offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sea Tours. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;