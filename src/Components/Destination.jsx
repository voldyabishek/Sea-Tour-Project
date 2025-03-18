import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaShip } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../CssComponents/Destination.css";

gsap.registerPlugin(ScrollTrigger);

const Destination = () => {
  useEffect(() => {
    gsap.from(".content-section", {
      opacity: 0.5,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 70%",
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
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1>Explore the Maldives</h1>
          <p>A paradise of crystal-clear waters and stunning beaches.</p>
          <button className="btn-primary">Book Now</button>
        </motion.div>
      </motion.div>

      {/* Key Attractions */}
      <motion.div 
        className="content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2>Key Attractions</h2>
        <div className="grid-container">
          {[
            { icon: FaUmbrellaBeach, title: "White Sand Beaches" },
            { icon: FaShip, title: "Luxury Cruises" },
            { icon: FaMapMarkerAlt, title: "Scenic Islands" }
          ].map((item, index) => (
            <motion.div key={index} className="glass-card" whileHover={{ scale: 1.05 }}>
              <item.icon className="icon-style" />
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
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
          {["beach1.jpg", "island2.jpg", "resort3.jpg"].map((img, index) => (
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

      {/* Packages */}
      <motion.div className="content-section">
        <h2>Tour Packages</h2>
        <div className="grid-container">
          {[
            { title: "Basic Package", price: "$299", features: "3 Days, 2 Nights Stay" },
            { title: "Adventure Package", price: "$499", features: "5 Days, 4 Nights + Scuba Diving" },
            { title: "Luxury Package", price: "$999", features: "7 Days, 6 Nights + Yacht Cruise" }
          ].map((pkg, index) => (
            <motion.div key={index} className="glass-card" whileHover={{ scale: 1.05 }}>
              <h3>{pkg.title}</h3>
              <p className="price">{pkg.price}</p>
              <p>{pkg.features}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="content-section">
        <h2>What Our Guests Say</h2>
        <div className="grid-container">
          {[
            { name: "Alice", review: "The best vacation ever! Highly recommended." },
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
