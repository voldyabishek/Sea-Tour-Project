// BacktoTop.js

import React, { useState, useEffect } from 'react';
import '../CssComponents/BacktoTop.css'; // Import the CSS for the component

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      aria-label="Back to top"
    >
      <span className="icon">▲</span>
      <span className="text">Top</span>
    </button>
  );
};

export default BacktoTop;