const about = {
  copy:
    "I am  2nd year Computer Engineering student at University of Cincinnati and an AI researcher who likes working at the edges between disciplines. My experience ranges from research and medical visualization to robotics, game development, data products, and the occasional very opinionated website.",
  location: "Cincinnati, Ohio",
  focus: ["AI research", "Healthcare", "Automotive"],
};

const skills = [
  { category: "Languages", items: ["Python", "C++", "C#", "JavaScript", "TypeScript", "HTML", "SQL"] },
  { category: "AI & data", items: ["Machine learning", "NLP", "Gemini", "Hugging Face", "Vector DB", "D3.js", "Chart.js"] },
  { category: "Build", items: ["React", "Next.js", "Flask", "Unity", "Three.js", "WordPress", "Docker"] },
  { category: "Hardware", items: ["Raspberry Pi 5", "Robotics", "DAQ", "Mission Planner", "Meta Quest", "EV systems"] },
];

export default function About() {
  return (
    <section id="about" className="section section-paper">
      <div className="section-heading">
        <p className="eyebrow">01</p>
        <h2>About</h2>
      </div>
      <div className="about-layout">
        <p className="about-lede">{about.copy}</p>
        <div className="about-note offset-box">
          <span className="mono-label">Current focus</span>
          <ul className="about-focus-list">
            {about.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <span className="mono-label">{about.location}</span>
        </div>
      </div>
      <div className="skill-ribbon">
        <span className="mono-label">Best at</span>
        <div className="skill-ribbon-items">
          {skills.flatMap((group) => group.items).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  );
}
