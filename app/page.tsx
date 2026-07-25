// app/page.tsx
import { currentRoles, previousRoles } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import SideLinks from "@/components/SideLinks";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
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

      <div className="page-wrap">
        <Hero />
        <About stagger={5} />
        {/* <TagCloud id="skills" label="skills" items={skills} stagger={6} /> */}
        {/* <TagCloud id="languages" label="languages" items={languages} stagger={7} /> */}
        <Timeline id="currently" label="currently" entries={currentRoles} stagger={7} />
        <Timeline id="previously" label="previously" entries={previousRoles} stagger={8} />
        <Projects stagger={9} />
        {/* <Honors stagger={10} /> */}
        <Extracurriculars stagger={10} />
        <Consuming stagger={11} />
        <Interests stagger={12} />
        <Contact stagger={13} />

        <footer>
          &copy; 2026 Joseph Leo &middot; built with purpose and 200mg caffeine
          doses &#9889;
          <Terminal />
        </footer>
      </div>
    </>
  );
}