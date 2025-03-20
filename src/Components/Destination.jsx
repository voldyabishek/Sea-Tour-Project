import { motion } from "framer-motion";
import "../CssComponents/Destination.css";

const Destination = () => {
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
          <source src="/Video5.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 2 }}
        >
          <h1>Explore the Beauty</h1>
          <p>A paradise of crystal-clear waters and stunning beaches.</p>
          <button className="btn-primary">Book now your stays</button>
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
          {["card-Img1.jpg", "card-Img3.webp", "card-Img2.jpg","card-Img3.webp","card-Img1.jpg","card-Img2.jpg"].map((img, index) => (
            <motion.div
              key={index}
              className="destination-card"
              style={{ backgroundImage: `url(/${img})` }}  // Updated path to public folder
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p>Destination {index + 1}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* guest says section card*/}
      <motion.div className="content-section">
        <h2>What Our Guests Say</h2>
        <div className="grid-container">
          {[{ name: "Alice", review: "The best vacation ever! Highly recommended." },
            { name: "John", review: "Amazing service and breathtaking views." },
            { name: "Sophia", review: "Luxury experience like never before!" },
          ].map((testimonial, index) => (
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
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
