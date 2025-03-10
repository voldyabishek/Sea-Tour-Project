
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../CssComponents/Contact.css";

const Contact = () => {
  

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-item">
          <FiPhone className="icon" />
          <p>+00 1234 567 890</p>
        </div>
        <div className="contact-item">
          <MdEmail className="icon" />
          <p>123@gmail.com.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p>123 Street, Mayiladuthuri-609105</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form" >
        <input type="text" name="name" placeholder="Your Name" required  />
        <input type="email" name="email" placeholder="Your Email" required  />
        <textarea name="message" placeholder="Your Message" required ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2293.5347822728336!2d79.85661796959711!3d11.12861974358402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1741588390233!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
