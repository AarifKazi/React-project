import React from "react";
import "./About.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="about-wrapper">

      <div className="about-overlay">

        <h1 className="about-title">About KitabGhar</h1>
        <p className="about-subtitle">
          Where Stories Meet Their Readers 📚
        </p>

        <div className="about-cards">

          <div className="card">
            <h2>📖 Our Mission</h2>
            <p>
              Humara goal hai har reader tak best books pahuchana aur
              reading habit ko grow karna.
            </p>
          </div>

          <div className="card">
            <h2>🌟 Why Us?</h2>
            <ul>
              <li>Wide collection</li>
              <li>Affordable price</li>
              <li>Easy navigation</li>
              <li>Fast service</li>
            </ul>
          </div>

          <div className="card">
            <h2>🚀 Vision</h2>
            <p>
              Ek aisa platform jaha har user apni favourite book easily
              find kare aur enjoy kare.
            </p>
          </div>

        </div>

      </div>
      <Footer/>
    </div>

  );
};

export default About;