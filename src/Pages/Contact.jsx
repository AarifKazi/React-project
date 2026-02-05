import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero */}
      <div className="contact-hero">
        <h1>Contact <span className="brand-color">J.K PVC Furniture</span></h1>
        <p>We’d love to hear from you! 📨</p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-cards">
          
          <div className="info-card-c">
            <h3>Visit Us</h3>
            <p>123 Furniture Street,<br />Ahmedabad, Gujarat, India</p>
          </div>

          <div className="info-card-c">
            <h3>Call Us</h3>
            <p>+91 98765 43210<br />Mon – Sat: 10am – 7pm</p>
          </div>

          <div className="info-card-c">
            <h3>Email Us</h3>
            <p>support@jkpvcfurniture.com</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
