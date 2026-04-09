// app/page.tsx
import { skills, languages, currentRoles, previousRoles } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import SideLinks from "@/components/SideLinks";
import NavDots from "@/components/NavDots";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TagCloud from "@/components/TagCloud";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Honors from "@/components/Honors";
import Extracurriculars from "@/components/Extracurriculars";
import Consuming from "@/components/Consuming";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <SideLinks />
      <NavDots />

      <div className="page-wrap">
        <Hero />
        <About />
        <TagCloud id="skills" label="skills" items={skills} />
        <TagCloud id="languages" label="languages" items={languages} />
        <Timeline id="currently" label="currently" entries={currentRoles} />
        <Timeline id="previously" label="previously" entries={previousRoles} />
        <Projects />
        <Honors />
        <Extracurriculars />
        <Consuming />
        <Interests />
        <Contact />

        <footer>
          &copy; 2026 Joseph Leo &middot; built with purpose and 200mg caffeine
          doses &#9889;
          <Terminal />
        </footer>
      </div>
    </>
  );
}