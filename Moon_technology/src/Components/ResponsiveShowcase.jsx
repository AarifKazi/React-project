import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiArrowRight,
  FiMonitor,
  FiSmartphone,
  FiTablet,
} from "react-icons/fi";

import "../main.css";

import showcase1 from "../assets/showcase1.png";
import showcase2 from "../assets/showcase2.jpg";
import showcase3 from "../assets/showcase3.png";

const showcaseData = [
  {
    id: 1,
    smallTitle: "DIGITAL EXPERIENCE",
    title: "BUILD SOMETHING AMAZING",
    description:
      "We create modern and engaging digital experiences that help businesses build a strong online presence and connect with their customers.",
    image: showcase1,
  },

  {
    id: 2,
    smallTitle: "SMART TECHNOLOGY",
    title: "SOLUTIONS THAT WORK",
    description:
      "Our scalable technology solutions are designed to simplify your business processes and help your organization grow faster.",
    image: showcase2,
  },

  {
    id: 3,
    smallTitle: "MOBILE & WEB",
    title: "ONE SOLUTION, EVERY DEVICE",
    description:
      "Deliver a seamless digital experience across desktop, tablet and mobile devices with responsive and user-friendly applications.",
    image: showcase3,
  },
];

const ResponsiveShowcase = () => {

  const [activeSlide, setActiveSlide] = useState(0);


  /* =========================
     AUTO SLIDER
  ========================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveSlide((prev) =>
        prev === showcaseData.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);


    return () => clearInterval(timer);

  }, []);


  /* =========================
     CURRENT SLIDE
  ========================= */

  const currentSlide =
    showcaseData[activeSlide];


  return (

    <section className="moon-showcase">

      <Container className="showcase-container">

        <Row className="align-items-center">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <Col
            lg={6}
            className="showcase-content"
          >

            <div className="showcase-content-inner">


              {/* SMALL TITLE */}

              <div className="showcase-small-title">

                <span></span>

                <p>
                  {currentSlide.smallTitle}
                </p>

              </div>


              {/* MAIN TITLE */}

              <h2 key={currentSlide.id}>

                {currentSlide.title}

              </h2>


              {/* DESCRIPTION */}

              <p className="showcase-description">

                {currentSlide.description}

              </p>


              {/* BUTTON */}

              <a
                href="/service"
                className="showcase-btn"
              >

                Explore Service

                <FiArrowRight />

              </a>


              {/* DEVICE FEATURES */}

              <div className="showcase-features">

                <div className="showcase-feature">

                  <FiMonitor />

                  <span>
                    Web
                  </span>

                </div>


                <div className="showcase-feature">

                  <FiTablet />

                  <span>
                    Tablet
                  </span>

                </div>


                <div className="showcase-feature">

                  <FiSmartphone />

                  <span>
                    Mobile
                  </span>

                </div>

              </div>


              {/* SLIDER DOTS */}

              <div className="showcase-dots">

                {showcaseData.map(
                  (slide, index) => (

                    <button
                      key={slide.id}
                      onClick={() =>
                        setActiveSlide(index)
                      }
                      className={
                        activeSlide === index
                          ? "active"
                          : ""
                      }
                      aria-label={
                        `Go to slide ${index + 1}`
                      }
                    />

                  )
                )}

              </div>

            </div>

          </Col>


          {/* =================================
              RIGHT IMAGE
          ================================= */}

          <Col
            lg={6}
            className="showcase-visual"
          >

            <div className="showcase-image-wrapper">


              {/* DECORATIVE CIRCLE */}

              <div className="showcase-circle"></div>


              {/* SLIDE IMAGES */}

              {showcaseData.map(
                (slide, index) => (

                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className={
                      activeSlide === index
                        ? "showcase-image active"
                        : "showcase-image"
                    }
                  />

                )
              )}


              {/* FLOATING CARD */}

              <div className="showcase-floating-card">

                <div className="floating-icon">

                  <FiMonitor />

                </div>


                <div className="floating-text">

                  <strong>
                    Responsive Design
                  </strong>

                  <span>
                    Built for every screen
                  </span>

                </div>

              </div>


              {/* MINI CARD */}

              <div className="showcase-mini-card">

                <span className="mini-dot"></span>

                <strong>
                  100% Responsive
                </strong>

              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </section>

  );

};


export default ResponsiveShowcase;