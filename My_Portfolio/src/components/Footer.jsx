import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line-container">
        <motion.div 
          className="footer-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="footer-logo-text">AK</span>
            <div>
              <p className="footer-brand-name">Aarif Kazi</p>
              <p className="footer-tagline">MERN Stack Developer</p>
            </div>
          </div>

          <div className="footer-actions">
            <div className="footer-socials">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link hover-target">
                <FaGithub size={19} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link hover-target">
                <FaLinkedin size={19} />
              </a>
              <a href="mailto:aarif@example.com" aria-label="Email" className="footer-social-link hover-target">
                <FaEnvelope size={18} />
              </a>
            </div>

            <a href="#home" className="footer-top-link">
              Back to top <FaArrowUp size={13} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Aarif Kazi. All rights reserved.</p>
          <p className="footer-note">Designed & built with React</p>
        </div>
      </div>
    </footer>
  );
}
