import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>AUREX</h2>
            <p>Luxury Watches for Every Style</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Collection</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Aurex Watches | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
