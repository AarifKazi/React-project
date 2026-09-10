import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "../main.css";

import slide1 from "../assets/slider1.avif";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";

const slides = [
  {
    id: 1,
    image: slide1,
    tag: "INNOVATIVE IT SOLUTIONS",
    title: "We Build Digital",
    highlight: "Experiences",
    description:
      "We create modern, scalable and high-performance digital solutions that help businesses grow and succeed.",
  },

  {
    id: 2,
    image: slide2,
    tag: "TECHNOLOGY FOR GROWTH",
    title: "Turn Your Ideas Into",
    highlight: "Digital Success",
    description:
      "From web development to custom software, we transform your ideas into powerful digital products.",
  },

  {
    id: 3,
    image: slide3,
    tag: "YOUR TECHNOLOGY PARTNER",
    title: "Smart Solutions For",
    highlight: "Modern Business",
    description:
      "Partner with Moon Technology to build reliable, secure and future-ready solutions for your business.",
  },
];

const Heroslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="moon-hero-slider">

      {/* Slides */}

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >

          {/* Dark Overlay */}

          <div className="hero-slide-overlay"></div>


          <Container className="hero-slide-container">

            <div className="hero-slide-content">

              {/* Tag */}

              <div className="hero-slide-tag">

                <span></span>

                {slide.tag}

              </div>


              {/* Heading */}

              <h1>

                {slide.title}

                <br />

                <span>{slide.highlight}</span>

              </h1>


              {/* Description */}

              <p>

                {slide.description}

              </p>


              {/* Buttons */}

              <div className="hero-slide-buttons">

                <a
                  href="/contact"
                  className="hero-slide-primary"
                >

                  Get Started

                  <FiArrowRight />

                </a>


                <a
                  href="/service"
                  className="hero-slide-secondary"
                >

                  Explore Services

                </a>

              </div>

            </div>

          </Container>

        </div>

      ))}


      {/* Previous / Next */}

      <div className="hero-slider-arrows">

        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <FiChevronRight />
        </button>

      </div>


      {/* Bottom Indicators */}

      <div className="hero-slider-dots">

        {slides.map((slide, index) => (

          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={
              index === currentSlide
                ? "active"
                : ""
            }
            aria-label={`Go to slide ${index + 1}`}
          >

            <span></span>

          </button>

        ))}

      </div>


      {/* Slide Number */}

      <div className="hero-slide-counter">

        <strong>
          0{currentSlide + 1}
        </strong>

        <span>
          / 0{slides.length}
        </span>

      </div>

    </section>
  );
};

export default Heroslider;