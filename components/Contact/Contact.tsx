import FooterRobot from "@/components/FooterRobot/FooterRobot";

const identity = "Atharv Singh";
const contact = {
  email: "atharvsingh1396@gmail.com",
  // blog: "https://atharvsingh.vercel.app",
  github: "https://github.com/SpectralGT",
  linkedin: "https://www.linkedin.com/in/atharvsingh1396/",
  itch: "https://spectralgt.itch.io",
};

export default function Contact() {
  return (
    <footer id="contact" className="footer section-ink">
      <div className="footer-main">
        <div>
          <p className="eyebrow eyebrow-accent">06</p>
          <h2>Contact</h2>
          <p className="footer-copy">Looking for my next opportunity. Have something in mind? Let&apos;s talk..</p>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
        <FooterRobot />
      </div>
      <div className="footer-bottom">
        <span className="mono-label">© 2026 {identity}</span>
        <div className="footer-links">
          {/* <a href={contact.blog} target="_blank" rel="noreferrer">Blog ↗</a> */}
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={contact.itch} target="_blank" rel="noreferrer">Itch.io ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
