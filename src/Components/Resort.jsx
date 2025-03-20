import React from "react";
import { motion } from "framer-motion";
import "../CssComponents/Resort.css";

const Resort = () => {
  const handleImageClick = (imageSrc) => {
    // You can add functionality here if needed for handling image clicks
    console.log("Image clicked:", imageSrc);
  };

  return (
    <section className="resort">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="Video5.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Resort Content */}
      <div className="resort-content">
        {/* Header */}
        <div className="resort-header">
          <motion.h1
            className="animated-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Discover Your Paradise
          </motion.h1>
          <motion.p
            className="animated-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to the most luxurious resort experience by the sea. Your
            journey to paradise begins here.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <div className="resort-images">
          <h2 className="section-title">Our Stunning Sea Stays</h2>
          <div className="image-gallery">
            {["card-Img1.jpg", "card-BGImg1.jpg", "card-BGImg2.jpg"].map(
              (src, index) => (
                <motion.div
                  className="image-item"
                  key={index}
                  onClick={() => handleImageClick(src)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={`Sea Stay ${index + 1}`}
                    className="animated-image"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="resort-amenities">
          <h2 className="section-title">Our Amenities</h2>
          <div className="amenities-list">
            {[
              {
                title: "Beachfront View",
                description:
                  "Enjoy a stunning view of the ocean right from your room.",
              },
              {
                title: "Spa & Wellness",
                description: "Relax and rejuvenate with world-class spa services.",
              },
              {
                title: "Gourmet Dining",
                description:
                  "Indulge in gourmet cuisine with fresh, local ingredients.",
              },
            ].map((amenity, index) => (
              <div className="amenity" key={index}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {amenity.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {amenity.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-booking">
          <motion.button
            className="booking-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book Your Stay
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Resort;
