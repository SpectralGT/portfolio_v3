import { link } from "fs/promises";

const hackathons = [
  { name: "RevolutionUC 2026", date: "Mar 2026", host: "University of Cincinnati", location: "Cincinnati, Ohio", result: "Winner", category: "Best Business Plan track", project: "NeuroPark", link: "https://devpost.com/software/neuropark" },
  { name: "Hacklytics 2026: Golden Byte", date: "Feb 2026", host: "Georgia Institute of Technology", location: "Atlanta, Georgia", result: "2nd", category: "Healthcare track", project: "HeartScape", link: "https://devpost.com/software/heartscape" },
  { name: "MakeUC 2025", date: "Nov 2025", host: "University of Cincinnati", location: "Cincinnati, Ohio", result: "2nd", category: "Overall · Best Green Tech Hack · MLH Best Use of Gemini API", project: "EcoCart", link: "https://devpost.com/software/makeuc-2025-project" },
  { name: "Compufest 2024", date: "Nov 2023", host: "Seth Anandram Jaipuria School", location: "Ghaziabad, India", result: "1st", category: "Overall", project: "Kooda", link: "https://github.com/SpectralGT/Kooda-Download-Site" },
  { name: "Melange 2023", date: "Nov 2023", host: "Seth Anandram Jaipuria School", location: "Ghaziabad, India", result: "1st", category: "Overall", project: "Project K", link: "https://github.com/SpectralGT/ProjectK" },
];


export default function Hackathons() {
  return (
    <section id="hackathons" className="section section-lime">
      <div className="section-heading">
        <p className="eyebrow">04</p>
        <h2>Hackathon wins</h2>
      </div>
      <div className="hackathon-list">
        {hackathons.map((hackathon) => (
          <article className="hackathon-row" key={hackathon.name}>
            <p className="mono-label">{hackathon.date}</p>
            <div>
              <h3>{hackathon.name}</h3>
              <p>{hackathon.host} · {hackathon.location}</p>
            </div>
            <div>
              <strong>{hackathon.result}</strong>
              <span>{hackathon.category}</span>
            </div>
            <a href={hackathon.link} target="_blank" rel="noreferrer" aria-label={`View ${hackathon.project}`}>
              {hackathon.project} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
