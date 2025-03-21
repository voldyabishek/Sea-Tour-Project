import React from 'react';
import { FaUmbrellaBeach, FaShip, FaCameraRetro, FaFish } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../CssComponents/Services.css';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <section className="services">
        <div className="services-page">
          <header className="services-header">
            <h1>Welcome to Our Services</h1>
            <p>Experience the best of nature, adventure, and cuisine!</p>
          </header>

          <div className="services">
            <h3>What We Offer</h3>
            <div className="services-cards">
              <motion.div
                className="service-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaUmbrellaBeach className="service-icon" />
                <h4>Scenic Resort Stays</h4>
                <p>Relax in our beautiful resorts with breathtaking views.</p>
              </motion.div>

              <motion.div
                className="service-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaShip className="service-icon" />
                <h4>Thrilling Sea Tours</h4>
                <p>Explore the oceans with our exciting sea tours.</p>
              </motion.div>

              <motion.div
                className="service-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaCameraRetro className="service-icon" />
                <h4>Unforgettable Beach Memories</h4>
                <p>Capture memories at the beach with our professional photographers.</p>
              </motion.div>

              <motion.div
                className="service-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaFish className="service-icon" />
                <h4>Delicious Seafood</h4>
                <p>Indulge in the freshest seafood from the sea to your plate.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <video className="service-Video" autoPlay loop muted>
        <source src="MainPage-Video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Services;