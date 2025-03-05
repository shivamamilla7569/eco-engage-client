import React from "react";
import "../styles/ContactUs.css"; // Import styles

const ContactUs = () => {
  return (
    <div className="contact-bin">
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Feel free to reach out to us.</p>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
