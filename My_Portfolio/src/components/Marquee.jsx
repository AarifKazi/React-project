import './Marquee.css';

const items = [
  'REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB', 'JAVASCRIPT',
  'MERN STACK', 'FULL STACK', 'WEB DEVELOPER', 'REACT.JS', 'NODE.JS',
  'EXPRESS.JS', 'MONGODB', 'JAVASCRIPT', 'MERN STACK', 'FULL STACK',
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-dot">•</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
