import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
           <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            ELEVATE YOUR <span>TIME</span>
          </h1>
          <p>Luxury Watches that define your personality</p>

          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-outline">Explore</button>
          </div>
        </div>

        {/* Floating Watch Image */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa"
            alt="watch"
          />
        </div>
      </div>
    </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <h2>Featured Watches</h2>
        <div className="featured-grid">

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314" />
            <h3>Classic Black</h3>
            <p>₹2,999</p>
          </div>

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" />
            <h3>Golden Elite</h3>
            <p>₹3,499</p>
          </div>

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5" />
            <h3>Minimal White</h3>
            <p>₹2,499</p>
          </div>

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6" />
            <h3>Sport X</h3>
            <p>₹2,799</p>
          </div>

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" />
            <h3>Royal Gold</h3>
            <p>₹3,999</p>
          </div>

          <div className="card-feature">
            <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" />
            <h3>Urban Steel</h3>
            <p>₹2,699</p>
          </div>

        </div>
      </section>
          {/* FEATURE COLLECTION SECTION */}
      <section className="collection">
        <h2>Our Collection</h2>
        <div className="collection-grid">

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" />
            <div className="overlay-text">Luxury</div>
          </div>

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" />
            <div className="overlay-text">Sport</div>
          </div>

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6" />
            <div className="overlay-text">Classic</div>
          </div>

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5" />
            <div className="overlay-text">Minimal</div>
          </div>

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314" />
            <div className="overlay-text">Premium</div>
          </div>

          <div className="collection-card">
            <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" />
            <div className="overlay-text">Limited</div>
          </div>

        </div>
      </section>



            {/* FOOTER */}
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
  );
}
