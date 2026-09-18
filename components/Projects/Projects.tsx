const projects = [
  {
    number: "01",
    title: "HeartScape",
    type: "Medical visualization",
    description:
      "An interactive 3D platform that transforms medical imaging into explorable heart models, allowing users to visualize, slice, and compare healthy and congenital anatomy in real time.",
    technologies: [
      "Actian",
      "Docker",
      "Flask",
      "Gemini",
      "HTML",
      "JavaScript",
      "Python",
      "PyVista",
      "Sphinx AI",
      "VectorDB",
      "Three.js",
    ],
    accent: "cyan",
    status: "Built for Hacklytics 2026",
    link: "https://devpost.com/software/heartscape",
  },
  {
    number: "02",
    title: "NeuroPark",
    type: "XR healthcare",
    description:
      "Precision Brain: practice neurosurgery in AR with real-time needle guidance for safer, smarter hydrocephalus procedures.",
    technologies: ["C#", "Meta Quest", "Python", "Unity", "XR"],
    accent: "coral",
    status: "Built for RevolutionUC 2026",
    link: "https://devpost.com/software/neuropark",
  },
  {
    number: "03",
    title: "EcoCart",
    type: "Sustainable shopping",
    description:
      "EcoCart turns your shopping cart into smarter and greener choices that save your wallet and the planet, making sustainability effortless.",
    technologies: [
      "BART",
      "Gemini",
      "Hugging Face",
      "NLP",
      "Node.js",
      "React",
      "Render",
      "Vector DB",
      "Zilliz",
    ],
    accent: "lime",
    status: "Built for MakeUC 2025",
    link: "https://devpost.com/software/makeuc-2025-project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-cyan">
      <div className="section-heading">
        <p className="eyebrow">03</p>
        <h2>Builds</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card project-${project.accent}`}
            key={project.title}
          >
            <div className="project-topline">
              <span className="project-number">{project.number}</span>
              <span className="mono-label">{project.type}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="body-copy">{project.description}</p>
            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
            <p className="project-result">
              <span>↳</span> {project.status}
            </p>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
