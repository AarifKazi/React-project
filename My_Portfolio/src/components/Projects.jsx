import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import img from '../assets/Moon_technology.png'

const projects = [
  {
    id: "01",
    title: "Moon Technology",
    description: "A comprehensive digital solution emphasizing modern web practices, responsive design, and robust performance.",
    tech: ["React", "Bootstrap", "CSS", "JavaScript"],
    github: "https://github.com/AarifKazi/React-project/tree/main/Moon_technology",
    live: "https://react-project-vplv-kappa.vercel.app/", // 
    image: img
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 5 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out' // Fast transition for smooth follow, snap back on leave handled by CSS or state reset
      }}
    >
      <div className="project-image-container hover-target">
        <div className="project-image-reveal">
          <img src={project.image} alt={project.title} loading={project.id === "01" ? "eager" : "lazy"} />
          <div className="project-overlay"></div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-number-container">
          <span className="project-number">{project.id}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description text-muted">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={project.live} className="project-link hover-target">
            Live Demo <ExternalLink size={18} />
          </a>
          <a href={project.github} className="project-link hover-target">
            Source Code <FaGithub size={18} />
          </a>
        </div>
      </div>
      <div className="card-border-glow"></div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="projects-section">
      <div className="projects-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SELECTED <span className="text-accent">WORKS</span>
        </motion.h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
