import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "../main.css";

const Footer = () => {
  const handleTopScroll = () => {

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  };
  return (
    <footer className="moon-footer">

      {/* =========================================
          TOP CTA SECTION
      ========================================= */}

      <div className="footer-cta">

        <Container>

          <div className="footer-cta-content">

            <div>
              <span className="footer-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's Build Something
                <span> Amazing Together.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="footer-cta-btn"
            >
              Let's Talk
              <FiArrowUpRight />
            </Link>

          </div>

        </Container>

      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        <Container>

          <Row className="footer-row">

            {/* =================================
                COMPANY INFO
            ================================= */}

            <Col
              lg={4}
              md={6}
              className="footer-company"
            >

              <Link
                to="/"
                className="footer-logo"
              >

                <div className="footer-logo-icon">
                  M
                </div>

                <div className="footer-logo-text">
                  <span>Moon</span>
                  <small>Technology</small>
                </div>

              </Link>


              <p className="footer-description">
                We build modern, scalable and high-performance
                digital solutions that help businesses grow,
                innovate and succeed in the digital world.
              </p>

            </Col>


            {/* =================================
                QUICK LINKS
            ================================= */}

            <Col
              lg={2}
              md={6}
              className="footer-column"
            >

              <h5>
                Quick Links
              </h5>

              <ul>
                <li>

                  <Link
                    to="/"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Home

                  </Link>

                </li>



                <li>

                  <Link
                    to="/about"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    About

                  </Link>

                </li>



                <li>

                  <Link
                    to="/service"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Services

                  </Link>

                </li>



                <li>

                  <Link
                    to="/solution"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Solutions

                  </Link>

                </li>



                <li>

                  <Link
                    to="/testimonials"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Testimonials

                  </Link>

                </li>



                <li>

                  <Link
                    to="/team"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Team

                  </Link>

                </li>



                <li>

                  <Link
                    to="/contact"
                    onClick={handleTopScroll}
                  >

                    <FiArrowRight />

                    Contact

                  </Link>

                </li>

              </ul>

            </Col>


            {/* =================================
                SERVICES
            ================================= */}

            <Col
              lg={3}
              md={6}
              className="footer-column"
            >

              <h5>
                Our Services
              </h5>
              <ul>

                <li>
                  <Link
                    to="/service/1"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    Web Development
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/2"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    UI / UX Design
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/3"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    Mobile App Development
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/4"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    E-Commerce Solution
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/5"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    Cloud Solution
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/6"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    Software Development
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/7"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    Digital Solution
                  </Link>
                </li>


                <li>
                  <Link
                    to="/service/8"
                    onClick={handleTopScroll}
                  >
                    <FiArrowRight />
                    IT Consulting
                  </Link>
                </li>


              </ul>

            </Col>


            {/* =================================
                CONTACT
            ================================= */}

            <Col
              lg={3}
              md={6}
              className="footer-column footer-contact"
            >

              <h5>
                Get In Touch
              </h5>



              <div className="footer-contact-item">

                <div className="footer-contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>Call Us</span>
                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>

              </div>


              <div className="footer-contact-item">

                <div className="footer-contact-icon">
                  <FiMail />
                </div>

                <div>
                  <span>Email Us</span>
                  <a href="mailto:info@moontechnology.com">
                    info@moontechnology.com
                  </a>
                </div>

              </div>

            </Col>

          </Row>

        </Container>

      </div>


      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}


    </footer>
  );
};

export default Footer;