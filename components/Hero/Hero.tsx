import Image from "next/image";
import InteractiveField from "@/components/InteractiveField/InteractiveField";

const identity = {
  name: "Atharv Singh",
  role: "AI researcher / builder",
  location: "Cincinnati, Ohio · originally from India",
  intro:
    "I work across machine learning, software, robotics, and design to turn difficult ideas into things people can explore.",
};

const contactEmail = "atharvsingh1396@gmail.com";

const stats = [
  { value: "+7", label: "Years of Experience" },
  { value: "03", label: "Rsearch Papers" },
  { value: "+5", label: "Hackathon Wins" },
  { value: "+20", label: "Projects" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <InteractiveField />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {identity.role}</p>
          <h1>{identity.name}</h1>
          <p className="hero-intro">{identity.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">See the work <span>↘</span></a>
            <a className="button button-outline" href={`mailto:${contactEmail}`}>Say hello <span>↗</span></a>
          </div>
          {/* <p className="location-line">{identity.location}</p> */}
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-shadow" />
          <Image className="hero-portrait" src="/Headshot.png" alt="Portrait of Atharv Singh" width={640} height={640} priority />
          <span className="portrait-label">AI / ML / BUILD</span>
        </div>
      </div>
      <div className="stats-strip" aria-label="Portfolio highlights">
        {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
    </section>
  );
}