import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">JKPVC Furniture</h2>
          <p>
            Premium quality PVC & furniture solutions.  
            Style, strength aur comfort – sab ek saath.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Modular Furniture</li>
            <li>PVC Furniture</li>
            <li>Custom Design</li>
            <li>Interior Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ jkpvcfurniture@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} JKPVC Furniture. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
