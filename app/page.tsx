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
        <About stagger={5} />
        <TagCloud id="skills" label="skills" items={skills} stagger={6} />
        <TagCloud id="languages" label="languages" items={languages} stagger={7} />
        <Timeline id="currently" label="currently" entries={currentRoles} stagger={8} />
        <Timeline id="previously" label="previously" entries={previousRoles} stagger={9} />
        <Projects stagger={10} />
        <Honors stagger={11} />
        <Extracurriculars stagger={12} />
        <Consuming stagger={13} />
        <Interests stagger={14} />
        <Contact stagger={15} />

        <footer>
          &copy; 2026 Joseph Leo &middot; built with purpose and 200mg caffeine
          doses &#9889;
          <Terminal />
        </footer>
      </div>
    </>
  );
}