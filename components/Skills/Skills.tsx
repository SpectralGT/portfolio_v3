const skills = [
  { category: "Languages", items: ["Python", "C++", "C#", "JavaScript", "TypeScript", "HTML", "SQL"] },
  { category: "AI & data", items: ["Machine learning", "NLP", "Gemini", "Hugging Face", "Vector DB", "D3.js", "Chart.js"] },
  { category: "Build", items: ["React", "Next.js", "Flask", "Unity", "Three.js", "WordPress", "Docker"] },
  { category: "Hardware", items: ["Raspberry Pi 5", "Robotics", "DAQ", "Mission Planner", "Meta Quest", "EV systems"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-paper skills-section">
      <div className="section-heading">
        <p className="eyebrow">04 / Toolkit</p>
        <h2>Enough tools to stay curious.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <p className="mono-label">{group.category}</p>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
