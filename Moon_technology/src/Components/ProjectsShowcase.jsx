import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiArrowRight, FiCode, FiLayers, FiBriefcase, FiSettings } from "react-icons/fi";

import "../main.css";

import projectsBg from "../assets/projectshowcase.jpg";
import designBg from "../assets/projectshowcase1.jpg";
import developmentBg from "../assets/projectshowcase2.jpg";
import managementBg from "../assets/projectshowcase3.jpg";

const projectData = [
  {
    id: 1,
    category: "PROJECTS",
    icon: <FiLayers />,
    smallTitle: "OUR BEST WORK",
    title: "DIGITAL SOLUTIONS",
    description:
      "We build modern and scalable digital solutions that help businesses grow, connect with customers and achieve their digital goals.",
    image: projectsBg,
  },

  {
    id: 2,
    category: "DESIGN",
    icon: <FiLayers />,
    smallTitle: "CREATIVE & CLEAN",
    title: "MODERN UI/UX DESIGN",
    description:
      "We create clean, attractive and user-friendly interfaces that deliver a smooth and engaging experience across every device.",
    image: designBg,
  },

  {
    id: 3,
    category: "DEVELOPMENT",
    icon: <FiCode />,
    smallTitle: "POWERFUL TECHNOLOGY",
    title: "WEB DEVELOPMENT",
    description:
      "We develop fast, secure and scalable websites and applications using modern technologies and industry best practices.",
    image: developmentBg,
  },

  {
    id: 4,
    category: "MANAGEMENT",
    icon: <FiBriefcase />,
    smallTitle: "SMART BUSINESS",
    title: "BUSINESS SOLUTIONS",
    description:
      "We provide reliable technology and strategic digital solutions that help businesses manage their digital journey effectively.",
    image: managementBg,
  },
];

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = projectData[activeTab];

  return (
    <section
      className="moon-projects"
      style={{
        backgroundImage: `url(${activeData.image})`,
      }}
    >

      {/* Dark Overlay */}

      <div className="projects-overlay"></div>


      {/* =================================
          CATEGORY TABS
      ================================= */}

      <div className="projects-tabs-wrapper">

        <Container className="projects-container">

          <div className="projects-tabs">

            {projectData.map((item, index) => (

              <button
                key={item.id}
                className={
                  activeTab === index
                    ? "project-tab active"
                    : "project-tab"
                }
                onClick={() => setActiveTab(index)}
              >

                <span className="tab-icon">
                  {item.icon}
                </span>

                <span>
                  {item.category}
                </span>

              </button>

            ))}

          </div>

        </Container>

      </div>


      {/* =================================
          CENTER CONTENT
      ================================= */}

      <Container className="projects-container">

        <div
          key={activeData.id}
          className="projects-center-content"
        >

          {/* Small Heading */}

          <div className="projects-small-title">

            <span></span>

            <p>
              {activeData.smallTitle}
            </p>

            <span></span>

          </div>


          {/* Main Heading */}

          <h2>
            {activeData.title}
          </h2>


          {/* Description */}

          <p className="projects-description">

            {activeData.description}

          </p>


          {/* Button */}

          <a
            href="/service"
            className="projects-btn"
          >

            Explore More

            <FiArrowRight />

          </a>

        </div>

      </Container>

    </section>
  );
};

export default ProjectsShowcase;