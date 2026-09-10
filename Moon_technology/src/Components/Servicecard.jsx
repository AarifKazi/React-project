import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiShoppingCart,
  FiCloud,
  FiDatabase,
  FiBarChart2,
  FiSettings,
  FiArrowUpRight,
} from "react-icons/fi";

import "../main.css";

const services = [
  {
    id: 1,
    icon: <FiCode />,
    title: "Web Development",
    description:
      "We build fast, modern and scalable websites that deliver a powerful digital experience.",
  },

  {
    id: 2,
    icon: <FiSmartphone />,
    title: "Mobile App Development",
    description:
      "Create user-friendly and high-performance mobile applications for modern businesses.",
  },

  {
    id: 3,
    icon: <FiPenTool />,
    title: "UI/UX Design",
    description:
      "We design clean, intuitive and engaging interfaces that users love to interact with.",
  },

  {
    id: 4,
    icon: <FiShoppingCart />,
    title: "E-Commerce Solutions",
    description:
      "Build secure and scalable online stores that help your business grow and sell more.",
  },

  {
    id: 5,
    icon: <FiCloud />,
    title: "Cloud Solutions",
    description:
      "Modern cloud solutions that improve scalability, flexibility and business performance.",
  },

  {
    id: 6,
    icon: <FiDatabase />,
    title: "Software Development",
    description:
      "Custom software solutions designed to solve complex business problems efficiently.",
  },

  {
    id: 7,
    icon: <FiBarChart2 />,
    title: "Digital Solutions",
    description:
      "Transform your business with smart digital strategies and innovative technology.",
  },

  {
    id: 8,
    icon: <FiSettings />,
    title: "IT Consulting",
    description:
      "Get expert technology guidance to choose the right solutions for your business.",
  },
];


const Servicecard = () => {
  return (

    <section className="moon-services">

      <Container>


        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="services-header">

          <div className="services-badge">

            <span></span>

            WHAT WE DO

          </div>


          <h2>

            Innovative Solutions

            <br />

            <span>For Your Digital Growth</span>

          </h2>


          <p>

            We provide modern technology solutions that help businesses
            innovate, grow and succeed in the digital world.

          </p>

        </div>



        {/* =========================
            SERVICES GRID
        ========================= */}

        <Row className="services-row">

          {services.map((service) => (

            <Col
              key={service.id}
              lg={3}
              md={6}
              sm={6}
              className="service-col"
            >

              <div className="service-card">


                {/* Number */}

                <span className="service-number">

                  0{service.id}

                </span>



                {/* Icon */}

                <div className="service-icon">

                  {service.icon}

                </div>



                {/* Content */}

                <h3>

                  {service.title}

                </h3>


                <p>

                  {service.description}

                </p>



                {/* Learn More */}

                <a
                  href={`/service/${service.id}`}
                  className="service-link"
                >

                  Learn More

                  <FiArrowUpRight />

                </a>


                {/* Hover Line */}

                <div className="service-hover-line"></div>

              </div>

            </Col>

          ))}

        </Row>



        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="services-bottom">

          <div>

            <strong>

              Have a project in mind?

            </strong>

            <span>

              Let's turn your idea into a powerful digital solution.

            </span>

          </div>


          <a
            href="/contact"
            className="services-cta"
          >

            Start Your Project

            <FiArrowUpRight />

          </a>

        </div>


      </Container>

    </section>

  );
};


export default Servicecard;