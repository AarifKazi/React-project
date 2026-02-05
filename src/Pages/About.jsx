import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <div className="hero-section">
        <h1>About <span className="brand-name">J.K PVC Furniture</span></h1>
        <p>Where Style Meets Strength</p>
      </div>

      {/* Main content */}
      <div className="about-content">

        <div className="about-text">
          <p>
            <strong>J.K PVC Furniture</strong> ek modern, stylish aur high quality furniture brand hai jo Indian homes aur offices ko stylish banane ke liye PVC furniture create karta hai.
          </p>
          <p>
            Humara maksad hai aapko bas furniture nahi dena — balki ek perfect interior experience dena jo
            long-lasting, waterproof aur low maintenance ho.
          </p>
        </div>

        {/* Image */}
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Furniture Interior"
          />
        </div>

      </div>

      {/* Info Cards */}
      
      <div className="cards-section">

        <div className="info-card">
          <h3>Mission</h3>
          <p>Quality furniture jo stylish ho, durable ho, aur har budget me fit ho</p>
        </div>

        <div className="info-card">
          <h3>Vision</h3>
          <p>Har Indian ghar aur office ko elegant interiors dena</p>
        </div>

        <div className="info-card">
          <h3>Why Us?</h3>
          <ul>
            <li>✔️ Premium PVC Material</li>
            <li>✔️ Waterproof & Termite Proof</li>
            <li>✔️ Stylish Designs</li>
            <li>✔️ Long Lasting Finish</li>
          </ul>
        </div>

      </div>

      {/* CTA Section */}
      <div className="main-cta">
      <div className="cta-section">
        <h2>Ready to Transform Your Space?</h2>
        <button>Contact Us</button>
      </div>
      </div>

    </div>
  );
};

export default About;
