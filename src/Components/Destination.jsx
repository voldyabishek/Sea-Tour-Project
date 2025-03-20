import { useEffect } from "react";
import { motion } from "framer-motion";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../CssComponents/Destination.css";

// Register ScrollTrigger plugin with GSAP
GSAP.registerPlugin(ScrollTrigger);

const Destination = () => {
  useEffect(() => {
    // Fade in and move up content sections on scroll
    GSAP.from(".content-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%", // Adjusted trigger point
        toggleActions: "play none none none",
      },
    });

    // Hero Video Parallax effect
    GSAP.from(".hero-video", {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".hero-video",
        start: "top bottom", // Trigger when the video enters view
        end: "bottom top",
        scrub: true, // Smooth animation during scroll
      },
    });

    // Animation for destination cards with iPhone-like scroll effect
    GSAP.from(".destination-card", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".destination-grid",
        start: "top 75%", // Trigger when the grid enters the viewport
        toggleActions: "play none none none",
        scrub: true,  // Smooth animation during scroll
      },
    });

    // Testimonials animation with iPhone-like scroll effect
    GSAP.from(".testimonial-card", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: true,  // Smooth animation during scroll
      },
    });
  }, []);

  return (
    <div className="destination-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <video className="hero-video" autoPlay loop muted>
          <source src="Video5.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 2 }}
        >
          <h1>Explore the Beauty</h1>
          <p>A paradise of crystal-clear waters and stunning beaches.</p>
          <button className="btn-primary">Book Now</button>
        </motion.div>
      </motion.div>

      {/* Top Destinations */}
      <motion.div
        className="content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h2>Top Destinations</h2>
        <div className="destination-grid">
          {["card-Img1.jpg", "card-Img3.webp", "card-Img2.jpg"].map((img, index) => (
            <motion.div
              key={index}
              className="destination-card"
              style={{ backgroundImage: `url(${img})` }}
              whileHover={{ scale: 1.05 }}
            >
              <p>Destination {index + 1}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="content-section">
        <h2>What Our Guests Say</h2>
        <div className="grid-container">
          {[{ name: "Alice", review: "The best vacation ever! Highly recommended." },
            { name: "John", review: "Amazing service and breathtaking views." },
            { name: "Sophia", review: "Luxury experience like never before!" }
          ].map((testimonial, index) => (
            <motion.div key={index} className="testimonial-card">
              <p>“{testimonial.review}”</p>
              <h4>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
