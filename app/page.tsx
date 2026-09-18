import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Hackathons from "@/components/Hackathons/Hackathons";
import Achievements from "@/components/Achievements/Achievements";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div id="page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Achievements />
      </main>
      <Contact />
    </div>
  );
}
