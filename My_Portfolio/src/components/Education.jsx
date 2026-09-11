import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './Experience.css'; // Reusing timeline CSS

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kalol Institute of Technology & Research Center (KIRC)",
    date: "2024 - 2026",
    description: "Completed my MCA."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kadi Sarva Vishwavidyalaya",
    date: "2021 - 2024",
    description: "Completed my BCA."
  }
];

const currentlyLearning = [
  {
    course: "MERN Stack Development Course",
    institution: "Red & White Multimedia Education (RNW), Gandhinagar",
    status: "Currently pursuing",
    description: "Currently learning MERN Stack Development. Technologies include HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and Git & GitHub."
  }
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="timeline-section" delay={0.2}>
      <h2 className="section-title text-center mb-12">Education</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <motion.div 
          className="timeline-line-glow"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {education.map((edu, index) => (
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
              <span className="timeline-date">{edu.date}</span>
              <h3 className="timeline-role">{edu.degree}</h3>
              <h4 className="timeline-company">{edu.institution}</h4>
              <p className="timeline-desc text-muted">{edu.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <h2 className="section-title text-center mt-20 mb-12">Currently Learning</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <motion.div 
          className="timeline-line-glow"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {currentlyLearning.map((learning, index) => (
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
              <span className="timeline-date">{learning.status}</span>
              <h3 className="timeline-role">{learning.course}</h3>
              <h4 className="timeline-company">{learning.institution}</h4>
              <p className="timeline-desc text-muted">{learning.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
