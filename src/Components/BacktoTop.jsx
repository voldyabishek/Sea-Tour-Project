// BacktoTop.js

import React, { useState, useEffect } from 'react';
import '../CssComponents/BacktoTop.css'; // Import the CSS for the component

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  // Scroll smoothly back to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top"
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      🐟<br/><span>Back To Top</span>
    </button>
  );
};

export default BacktoTop;
