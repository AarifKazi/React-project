import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './Experience.css';

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Brainybeam Technology",
    date: "15 July 2026 – 3 Months",
    description: "Gained hands-on experience working with modern web development technologies and MERN Stack concepts.",
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git/GitHub"]
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="timeline-section">
      <h2 className="section-title text-center mb-12">Experience</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <motion.div 
          className="timeline-line-glow"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
            
            <motion.div 
              className="timeline-content hover-target"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-desc text-muted">{exp.description}</p>
              <div className="timeline-tech">
                {exp.tech.map((t, i) => (
                  <span key={i} className="timeline-tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
