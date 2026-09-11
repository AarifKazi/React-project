import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.4 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const name = "I'm Aarif Kazi".split("");

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="grid-pattern"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="particles-container">
          {/* Simple CSS particles via background pattern in CSS */}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="pulse-dot"></span>
            AVAILABLE FOR MERN STACK OPPORTUNITIES
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-greeting">Hi,<br/></span>
            <motion.span className="hero-name" variants={nameVariants}>
              {name.map((char, index) => (
                <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            <span className="text-accent">MERN Stack</span> Developer
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            MCA graduate and MERN Stack developer focused on building modern, responsive and user-friendly web applications.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <MagneticButton as="a" href="#projects" className="btn-primary hover-target">
              VIEW PROJECTS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticButton>
            <MagneticButton as="a" href="#contact" className="btn-outline hover-target">
              LET'S CONNECT
            </MagneticButton>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
