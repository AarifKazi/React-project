import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { MapPin, GraduationCap, Code2, Briefcase } from 'lucide-react';
import './About.css';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap size={24} />,
      title: "MCA",
      desc: "Master of Computer Applications"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      desc: "Gandhinagar, Gujarat"
    },
    {
      icon: <Code2 size={24} />,
      title: "Role",
      desc: "MERN Stack Developer"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Status",
      desc: "Open to Opportunities"
    }
  ];

  return (
    <SectionWrapper id="about" className="about-section">
      <div className="about-content">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-subtitle">ABOUT ME</h2>
          <h3 className="about-statement">
            I turn ideas into <span className="text-accent">interactive</span> digital experiences.
          </h3>
          <p className="about-description text-muted">
            I am an MCA and BCA graduate with a passion for building robust web applications. I am currently enhancing my skills by pursuing MERN Stack Development training at Red & White Multimedia Education in Gandhinagar, and I have hands-on experience from completing a 3-month MERN Stack internship at Brainybeam Technology. With a strong interest in React.js and full-stack development, I am actively looking for Junior MERN or React Developer opportunities to contribute and grow.
          </p>
        </motion.div>

        <div className="about-cards">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="info-card hover-target"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc text-muted">{card.desc}</p>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
