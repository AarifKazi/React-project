import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '', delay = 0 }) {
  return (
    <motion.section
      id={id}
      className={`section-wrapper ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
}
