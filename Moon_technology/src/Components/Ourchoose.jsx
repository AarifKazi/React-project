import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiCheckCircle,
  FiZap,
  FiTarget,
  FiShield,
  FiCode,
  FiUsers,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

import "../main.css";

const OurChooseUs = () => {
  return (
    <section className="why-moon-section">

      {/* Background Decorations */}
      <div className="why-bg-circle why-circle-one"></div>
      <div className="why-bg-circle why-circle-two"></div>

      <Container>

        <Row className="align-items-center">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <Col lg={6} className="why-content">

            <div className="why-badge">
              <span></span>
              WHY CHOOSE US
            </div>

            <h2>
              Technology That Drives
              <br />
              <span>Your Business Forward</span>
            </h2>

            <p className="why-description">
              At Moon Technology, we combine innovative technology,
              creative thinking and business-focused strategies to
              deliver digital solutions that make a real difference.
            </p>


            {/* Features */}

            <div className="why-features">

              {/* Feature 1 */}
              <div className="why-feature">

                <div className="why-feature-icon">
                  <FiZap />
                </div>

                <div>
                  <h4>Modern Technology</h4>

                  <p>
                    We use modern tools and technologies to build
                    fast, scalable and future-ready solutions.
                  </p>
                </div>

              </div>


              {/* Feature 2 */}
              <div className="why-feature">

                <div className="why-feature-icon">
                  <FiTarget />
                </div>

                <div>
                  <h4>Client-Focused Approach</h4>

                  <p>
                    We understand your goals and create solutions
                    that are designed around your business needs.
                  </p>
                </div>

              </div>


              {/* Feature 3 */}
              <div className="why-feature">

                <div className="why-feature-icon">
                  <FiShield />
                </div>

                <div>
                  <h4>Quality & Security</h4>

                  <p>
                    Every project is developed with quality,
                    reliability and security in mind.
                  </p>
                </div>

              </div>


              {/* Feature 4 */}
              <div className="why-feature">

                <div className="why-feature-icon">
                  <FiUsers />
                </div>

                <div>
                  <h4>Professional Support</h4>

                  <p>
                    Our team provides continuous support to help
                    your digital product grow successfully.
                  </p>
                </div>

              </div>

            </div>


            {/* CTA */}

            <a
              href="/about"
              className="why-about-btn"
            >
              Discover More About Us
              <FiArrowUpRight />
            </a>

          </Col>


          {/* =================================
              RIGHT VISUAL
          ================================= */}

          <Col lg={6} className="why-visual">

            <div className="why-visual-wrapper">

              {/* Outer Rings */}

              <div className="why-orbit orbit-one"></div>

              <div className="why-orbit orbit-two"></div>


              {/* Center Circle */}

              <div className="why-center">

                <div className="why-logo">
                  M
                </div>

                <strong>
                  Moon
                </strong>

                <span>
                  Technology
                </span>

              </div>


              {/* Floating Tech Cards */}

              <div className="why-floating-card card-top">

                <div className="why-card-icon">
                  <FiCode />
                </div>

                <div>
                  <strong>Smart Solutions</strong>
                  <small>Built With Technology</small>
                </div>

              </div>


              <div className="why-floating-card card-right">

                <div className="why-card-icon">
                  <FiTrendingUp />
                </div>

                <div>
                  <strong>Business Growth</strong>
                  <small>Results That Matter</small>
                </div>

              </div>


              <div className="why-floating-card card-bottom">

                <div className="why-card-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Quality Delivery</strong>
                  <small>On Time & Reliable</small>
                </div>

              </div>


              {/* Stats */}

              <div className="why-stat stat-projects">

                <strong>50+</strong>

                <span>Projects</span>

              </div>


              <div className="why-stat stat-clients">

                <strong>30+</strong>

                <span>Happy Clients</span>

              </div>


              <div className="why-stat stat-success">

                <strong>98%</strong>

                <span>Success Rate</span>

              </div>


              {/* Decorative Dots */}

              <span className="why-dot dot-one"></span>

              <span className="why-dot dot-two"></span>

              <span className="why-dot dot-three"></span>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default OurChooseUs;