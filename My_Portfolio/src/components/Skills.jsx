import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, SiGit, 
  SiGithub, SiBootstrap 
} from 'react-icons/si';
import './Skills.css';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
  ];

  return (
    <SectionWrapper id="skills" className="skills-section">
      <div className="skills-bg-grid"></div>
      
      <div className="skills-header text-center">
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Technologies and tools I use to build modern digital experiences.
        </p>
      </div>

      <div className="skills-wall">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-badge hover-target"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-glow"></div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
