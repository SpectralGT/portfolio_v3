const research = [
  { year: "Apr 2024", title: "Stable Diffusion Model: The Past, Present and the Future in India", journal: "International Journal of Scientific Development and Research", excerpt: "A study of AI development and usage in India, with interviews and survey responses focused on usefulness, data privacy, ethical use, and the need for regulation.", link: "https://www.ijsdr.org/viewpaperforall.php?paper=IJSDR2404003" },
  { year: "Aug 2024", title: "Artificial Intelligence in Healthcare: A Focus on Chest X-ray Disease Detection", journal: "International Journal of Scientific Development and Research", excerpt: "A review of deep learning for chest X-ray analysis, including clinical workflow integration, early detection, validation, bias, privacy, and human oversight.", link: "https://www.ijsdr.org/viewpaperforall.php?paper=IJSDR2408015" },
  { year: "Aug 2024", title: "Impact of Government Policies and Regulations on the Indian Gaming Industry", journal: "International Journal of Scientific Development and Research", excerpt: "An analysis of taxation, licensing, content regulation, consumer protection, and policy improvements that could support responsible growth in India's gaming industry.", link: "https://www.ijsdr.org/viewpaperforall.php?paper=IJSDR2408070" },
];

const writing = [
  { type: "Book", date: "24 Sep 2024", title: "The Unity Game Engine: A Comprehensive Guide to Unity for Game Developers", link: "https://www.amazon.in/UNITY-GAME-ENGINE-comprehensize-developers-ebook/dp/B0DHTZTQ88" },
];

const interests = [
  ["Cars", "Aston Martin DB11", "Bugatti Bolide", "Harley Davidson Fat Boy"],
  ["Games", "Sekiro", "Cyberpunk 2077", "TitanFall 2", "Metro 2033", "GTA Vice City"],
  ["Watch", "F1", "The Social Network", "La La Land", "Mission Impossible"],
  ["Make", "Photography", "Guitar", "Engineering new stuff", "Game jams"],
  ["Read", "The Millionaire Fastlane", "Can't Hurt Me", "Outliers", "Metro 2033"],
];

export default function Achievements() {
  return (
    <section id="writing" className="section section-coral">
      <div className="section-heading">
        <p className="eyebrow">05</p>
        <h2>Research &amp; Publications</h2>
      </div>
      <div className="research-list">
        {research.map((item) => (
          <article className="research-row" key={item.title}>
            <p className="display-number">{item.year}</p>
            <div><p className="mono-label">{item.journal}</p><h3>{item.title}</h3><p className="body-copy">{item.excerpt}</p><a className="research-link" href={item.link} target="_blank" rel="noreferrer">Read paper ↗</a></div>
          </article>
        ))}
      </div>
      <div className="writing-lower">
        {writing.map((item) => <a className="book-note" href={item.link} target="_blank" rel="noreferrer" key={item.title}><span className="mono-label">{item.type} · {item.date}</span><h3>{item.title}</h3><span>Read on Amazon ↗</span></a>)}
      </div>
    </section>
  );
}
