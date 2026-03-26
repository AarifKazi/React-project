import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer-container">

                    <div class="footer-section">
                        <h2 class="footer-logo">KitabGhar</h2>
                        <p>Your one-stop destination for books, novels, study materials and more.</p>
                    </div>

                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Featured</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Fiction</a></li>
                            <li><a href="#">Non-Fiction</a></li>
                            <li><a href="#">Academic</a></li>
                            <li><a href="#">Competitive</a></li>
                        </ul>
                    </div>


                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@kitabghar.com</p>
                        <p>Phone: +91 9876543210</p>
                        <div class="social-icons">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>© 2026 KitabGhar. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
