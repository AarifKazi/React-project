import React from "react";
import "./About.css";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Aurex</h1>
        <p>Crafting Timepieces that Define Luxury</p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="about-content">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
          <div>
            <h2>Our Story</h2>
            <p style={{width:"550px"}}>
              Aurex Watches was created with a vision to deliver premium
              quality watches that combine style, precision, and innovation.
              We believe a watch is not just time — it's personality.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-section dark">
        <div className="about-content reverse">
          <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa" />
          <div>
            <h2>Our Mission</h2>
            <p style={{width:"550px"}}>
              To provide luxury watches at affordable prices while maintaining
              top-notch quality and design standards.
            </p>
          </div>
        </div>
      </section>
       <Footer/>
    </div>
  );
}