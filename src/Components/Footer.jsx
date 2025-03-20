import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../CssComponents/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sea Tour</h2>
          <p>
            Explore the world’s best coastlines, islands, and beaches with Sea Tour.
            Your ultimate guide to unforgettable sea tours.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><strong>Sea Tour Inc.</strong></p>
          <p>123 Ocean Drive, Suite 450</p>
          <p>Miami, FL 33101, USA</p>
          <p>Email: <a href="mailto:support@seatur.com">support@seatur.com</a></p>
          <p>Phone: +1 800 555 1234</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sea Tour. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
