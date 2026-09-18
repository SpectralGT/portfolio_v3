const experience = [
  {
    period: "Aug 2026 — Present",
    organization: "University of Cincinnati",
    role: "AI Research Intern",
    location: "Cincinnati, Ohio",
    description: "Researching Glioblastoma detection using machine learning, AI, and medical imaging techniques. Developing U-Net and CNN models using Python and CUDA for brain tumor detection and segmentation. Processing NIfTI and DICOM medical imaging data for brain tumor detection and AI research.",
    tags: ["Research", "AI", "Healthcare"],
  },
  {
    period: "Oct — Nov 2024",
    organization: "DTown Robotics",
    role: "C++ Developer Intern",
    location: "Noida, India",
    description: "Configured autonomous systems with Mission Planner, integrated C++ code, supported functional testing and performance evaluation, and assembled robotic components, sensors, and peripherals.",
    tags: ["C++", "Robotics", "Mission Planner", "QA"],
  },
  {
    period: "Aug — Sep 2024",
    organization: "Project ZeroCost",
    role: "WordPress Developer Intern",
    location: "Noida · Unpaid",
    status: "Completed",
    manager: "",
    description: "Created wireframes, mockups, and high-fidelity prototypes, then iterated on a WordPress site using customer feedback. Added contact forms, SEO, and social integrations.",
    tags: ["WordPress", "Prototyping", "SEO"],
  },
  {
    period: "Jul — Aug 2024",
    organization: "Cook N Klean",
    role: "Graphics Design Intern",
    location: "Remote · Unpaid",
    status: "Completed",
    manager: "",
    description: "Created logos, icons, infographics, social graphics, flyers, and brochures using Canva and principles of contrast, emphasis, and typography.",
    tags: ["Canva", "Graphic design", "Typography"],
  },
  {
    period: "Jun — Jul 2024",
    organization: "Electronic Arts · Forage",
    role: "Remote Intern",
    location: "Remote · Unpaid",
    status: "Completed",
    manager: "",
    description: "Proposed a game feature, designed a reusable game object using object-oriented programming, analyzed an inventory system, and used debugging tools to resolve issues in real time.",
    tags: ["C#", "Game development", "OOP", "Debugging"],
  },
  {
    period: "Jun — Jul 2024",
    organization: "JPMorgan Chase & Co. · Forage",
    role: "Remote Intern",
    location: "Remote · Unpaid",
    status: "Completed",
    manager: "",
    description: "Integrated a data feed into an application, worked with APIs and proprietary tools, and designed data visualization components using libraries such as D3.js or Chart.js.",
    tags: ["APIs", "Data visualization", "D3.js", "Chart.js"],
  },
  {
    period: "Mar — Apr 2025",
    organization: "Centauri Consultancy",
    role: "WordPress Developer Intern",
    location: "Remote · Unpaid",
    status: "Completed",
    manager: "",
    description: "Designed a responsive WordPress website with a job board, contact forms, social media integration, and SEO optimization.",
    tags: ["WordPress", "Responsive web", "Job boards", "SEO"],
  },
];

const community = [
  { period: "Sep 2025 — ongoing", organization: "CEAS Tribunal", role: "Tech Chair", description: "Worked on the website and helped maintain, update, and improve the technology and digital systems owned and used by Tribunal, ensuring everything remained functional and reliable.", tags: ["Django", "React.js", "Docker"] },
  { period: "Apr 2026 — Ongoing", organization: "ACM@UC", role: "Secretary", description: "Take meeting notes, make executive decisions, organize information, create presentations, and write workshop content and code for high school students at Mason High School.", tags: ["Leadership", "Workshops", "Writing"] },
  { period: "Apr 2026 — ongoing", organization: "IPALs", role: "International student leader", description: "Help international students feel at home at UC by answering questions, building connections, planning events, and sharing campus life.", tags: ["Community", "Mentoring", "Events"] },
];

export default function Experience() {
  return (
    <section id="work" className="section section-ink">
      <div className="section-heading section-heading-light">
        <p className="eyebrow">02</p>
        <h2>Experience</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={`${item.period}-${item.organization}-${item.role}`}>
            <p className="mono-label experience-period">{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="eyebrow experience-org">{item.organization}</p>
              <p className="experience-meta">{item.location}</p>
              <p className="body-copy">{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => <span className="tag tag-dark" key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="subsection-label community-label">Community</p>
      <div className="community-grid">
        {community.map((item) => (
          <article className="community-item" key={`${item.organization}-${item.role}`}>
            <p className="mono-label experience-period">{item.period}</p>
            <p className="eyebrow experience-org">{item.organization}</p>
            <h3>{item.role}</h3>
            <p className="body-copy">{item.description}</p>
            <div className="tag-list">{item.tags.map((tag) => <span className="tag tag-dark" key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
