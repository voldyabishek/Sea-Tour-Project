import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import Slider for testimonials
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CssComponents/Destination.css";

const Destination = () => {
  const destinations = [
    {
      image: "img-7.jpg",
      name: "Local fisherman village",
      description: "Experience with local fisherman life styles.",
    },
    {
      image: "card-Img3.webp",
      name: "Adventure Island",
      description: "Explore hidden caves and enjoy thrilling water sports.",
    },
    {
      image: "mainimg-1.webp",
      name: "Coral Reef Haven",
      description: "Dive into vibrant coral reefs and discover marine life.",
    },
    {
      image: "sunset.jpg",
      name: "Sunset Lagoon",
      description: "Witness breathtaking sunsets over serene lagoons.",
    },
    {
      image: "MainImg-5.jpg",
      name: "Secluded Cove",
      description: "Escape to a private cove for a peaceful retreat.",
    },
    {
      image: "deepseaFishing.jpg",
      name: "Deep Sea Fishing",
      description: "Enjoy the Deep sea view  and Deep sea fishing .",
    },
  ];

  const testimonials = [
    { name: "Alice", review: "The best vacation ever! Highly recommended." },
    { name: "John", review: "Amazing service and breathtaking views." },
    { name: "Sophia", review: "Luxury experience like never before!" },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

  return (
    <div className="destination-container">
     

      {/* Top Destinations */}
      <motion.div
        className="content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h2>Top Destinations</h2>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="destination-card"
              style={{ backgroundImage: `url(/${destination.image})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleDestinationClick(destination)}
            >
              <div className="destination-overlay">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Guest Testimonials */}
      <motion.div className="content-section">
        <h2>What Our Guests Say</h2>
        <Slider {...sliderSettings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 1 }}
            >
              <p>“{testimonial.review}”</p>
              <h4>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Modal for Destination Details */}
      {selectedDestination && (
        <div className="destination-modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={`/${selectedDestination.image}`} alt={selectedDestination.name} />
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            <button className="btn-primary" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;