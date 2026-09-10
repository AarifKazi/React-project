import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  FiArrowUpRight,
  FiPlay,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiCloud,
  FiPenTool,
  FiSettings,
  FiCheckCircle,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

import heroBg from "../assets/bg.avif";
import "../main.css";

const Hero = () => {
  return (
    <section
      className="moon-hero"
      style={{ "--hero-bg": `url(${heroBg})` }}
    >

      {/* Background Effects */}

      <div className="hero-overlay"></div>

      <div className="hero-gradient-shape shape-one"></div>
      <div className="hero-gradient-shape shape-two"></div>


      <Container className="hero-container">

        <Row className="align-items-center">


          {/* =================================
              LEFT CONTENT
          ================================= */}

          <Col lg={6} className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>

              About Moon Technology
            </div>


            <h1>
              We Build Powerful
              <br />

              <span>Software Solutions</span>

              <br />

              For Your Business Growth
            </h1>


            <p className="hero-description">

              We create modern, scalable and high-performance digital
              solutions that help businesses grow, innovate and succeed
              in the digital world.

            </p>


            {/* Features */}

            <div className="hero-features">

              <div>
                <FiCheckCircle />
                <span>Modern Technology</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Scalable Solutions</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Professional Support</span>
              </div>

            </div>


            {/* Buttons */}

            <div className="hero-buttons">

              <a
                href="/contact"
                className="hero-primary-btn"
              >
                Get Started

                <FiArrowUpRight />

              </a>


              <a
                href="/projects"
                className="hero-secondary-btn"
              >

                <span className="play-icon">
                  <FiPlay />
                </span>

                View Our Work

              </a>

            </div>


            {/* Trust */}

            <div className="hero-trust">

              <div className="trust-avatars">

                <span>MK</span>
                <span>AR</span>
                <span>SK</span>
                <span>+</span>

              </div>


              <div>

                <strong>
                  Trusted by growing businesses
                </strong>

                <small>
                  Delivering quality digital solutions
                </small>

              </div>

            </div>

          </Col>



          {/* =================================
              RIGHT MODERN VISUAL
          ================================= */}

          <Col lg={6} className="hero-visual">


            {/* Background Rings */}

            <div className="visual-ring ring-one"></div>

            <div className="visual-ring ring-two"></div>



            {/* =================================
                MAIN LAPTOP
            ================================= */}

            <div className="modern-laptop">


              {/* Laptop Screen */}

              <div className="modern-laptop-screen">


                {/* Browser Header */}

                <div className="browser-header">

                  <div className="window-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>


                  <div className="browser-address">

                    <span>
                      moontechnology.com
                    </span>

                  </div>


                  <FiSettings />

                </div>



                {/* Dashboard */}

                <div className="dashboard-content">


                  {/* Sidebar */}

                  <div className="dashboard-sidebar">

                    <div className="dashboard-logo">
                      M
                    </div>


                    <span className="sidebar-active">
                      <FiBarChart2 />
                    </span>

                    <span>
                      <FiCode />
                    </span>

                    <span>
                      <FiLayers />
                    </span>

                    <span>
                      <FiUsers />
                    </span>

                    <span>
                      <FiSettings />
                    </span>

                  </div>



                  {/* Main Dashboard */}

                  <div className="dashboard-main">


                    <div className="dashboard-heading">

                      <div>

                        <small>
                          Welcome back
                        </small>

                        <h4>
                          Project Overview
                        </h4>

                      </div>


                      <div className="dashboard-avatar">
                        MT
                      </div>

                    </div>



                    {/* Stats */}

                    <div className="dashboard-stats">


                      <div className="stat-card">

                        <FiCode />

                        <div>

                          <small>
                            Projects
                          </small>

                          <strong>
                            128
                          </strong>

                        </div>

                      </div>



                      <div className="stat-card">

                        <FiUsers />

                        <div>

                          <small>
                            Clients
                          </small>

                          <strong>
                            86
                          </strong>

                        </div>

                      </div>



                      <div className="stat-card">

                        <FiCheckCircle />

                        <div>

                          <small>
                            Success
                          </small>

                          <strong>
                            98%
                          </strong>

                        </div>

                      </div>


                    </div>



                    {/* Chart */}

                    <div className="dashboard-chart">

                      <div className="chart-header">

                        <div>

                          <small>
                            Project Growth
                          </small>

                          <strong>
                            +24.8%
                          </strong>

                        </div>

                        <span>
                          2026
                        </span>

                      </div>


                      <div className="chart-area">

                        <div className="chart-line"></div>

                        <div className="chart-point point-one"></div>

                        <div className="chart-point point-two"></div>

                        <div className="chart-point point-three"></div>

                        <div className="chart-point point-four"></div>

                        <div className="chart-point point-five"></div>

                      </div>

                    </div>



                    {/* Bottom Cards */}

                    <div className="dashboard-bottom">


                      <div className="mini-project">

                        <div className="mini-icon">
                          <FiSmartphone />
                        </div>

                        <div>

                          <strong>
                            Mobile App
                          </strong>

                          <small>
                            Development
                          </small>

                        </div>

                        <span className="project-status">
                          92%
                        </span>

                      </div>



                      <div className="mini-project">

                        <div className="mini-icon">
                          <FiCloud />
                        </div>

                        <div>

                          <strong>
                            Cloud System
                          </strong>

                          <small>
                            Deployment
                          </small>

                        </div>

                        <span className="project-status">
                          78%
                        </span>

                      </div>


                    </div>

                  </div>

                </div>

              </div>



              {/* Laptop Base */}

              <div className="modern-laptop-base">

                <div className="laptop-notch"></div>

              </div>

            </div>



            {/* =================================
                FLOATING CARD 1
            ================================= */}

            <div className="floating-card development-card">

              <div className="floating-icon">
                <FiCode />
              </div>

              <div>

                <strong>
                  Web Development
                </strong>

                <span>
                  Modern & Scalable
                </span>

              </div>

              <div className="status-dot"></div>

            </div>



            {/* =================================
                FLOATING CARD 2
            ================================= */}

            <div className="floating-card project-card">

              <div className="project-icon">

                <FiCheckCircle />

              </div>

              <div>

                <strong>
                  Project Completed
                </strong>

                <span>
                  Successfully Delivered
                </span>

              </div>

            </div>



            {/* =================================
                FLOATING CARD 3
            ================================= */}

            <div className="floating-card tech-card">

              <div className="tech-icons">

                <span>
                  <FiLayers />
                </span>

                <span>
                  <FiSmartphone />
                </span>

                <span>
                  <FiCloud />
                </span>

                <span>
                  <FiPenTool />
                </span>

              </div>


              <div>

                <strong>
                  Complete IT Solutions
                </strong>

                <span>
                  From Idea to Deployment
                </span>

              </div>

            </div>



            {/* Particles */}

            <span className="particle particle-one"></span>

            <span className="particle particle-two"></span>

            <span className="particle particle-three"></span>

            <span className="particle particle-four"></span>


          </Col>

        </Row>

      </Container>



      {/* Bottom Wave */}

      <div className="hero-wave">

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >

          <path
            d="M0,80 C300,140 500,20 800,70 C1050,115 1200,40 1440,70 L1440,120 L0,120 Z"
          />

        </svg>

      </div>

    </section>
  );
};

export default Hero;