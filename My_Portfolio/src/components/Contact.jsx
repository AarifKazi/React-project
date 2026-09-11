import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import MagneticButton from './MagneticButton';
import { ArrowRight, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submit delay
    await new Promise(res => setTimeout(res, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: <FaGithub size={20} />, label: 'GitHub', href: 'https://github.com/AarifKazi?tab=repositories' },
    { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aarif-kazi-5245232a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaEnvelope size={20} />, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kaziaarif61@gmail.com' },
  ];

  return (
    <SectionWrapper id="contact" className="contact-section">
      <div className="contact-inner">
        <motion.div
          className="contact-heading-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-headline">
            LET'S BUILD SOMETHING<br />
            <span className="text-accent">GREAT TOGETHER.</span>
          </h2>
          <p className="contact-sub text-muted">
            Open to full-time positions, freelance projects, and collaborations.
          </p>

          <div className="social-links">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.label === 'Email' ? undefined : '_blank'}
                rel={s.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="social-link hover-target"
                whileHover={{ scale: 1.05, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {s.icon}
                <span>{s.label}</span>
                <ArrowRight size={14} className="arrow-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="form-input hover-target"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="form-input hover-target"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="form-input form-textarea hover-target"
            />
          </div>

          <MagneticButton
            as="button"
            type="submit"
            className={`btn-primary submit-btn hover-target ${sending ? 'loading' : ''}`}
          >
            {sent ? 'MESSAGE SENT ✓' : sending ? 'SENDING...' : 'SEND MESSAGE'}
            {!sent && !sending && <Send size={18} className="btn-icon" />}
          </MagneticButton>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
