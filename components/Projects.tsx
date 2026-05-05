// components/Projects.tsx
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Projects({ stagger }: { stagger?: number }) {
  return (
    <FadeIn id="projects" className="section" stagger={stagger}>
      <div className="section-label">projects</div>
      {projects.map((p, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-top">
            <div className="tl-top-inner">
              <span className="tl-role">{p.name}</span>
              <span className="proj-role">{p.role}</span>
            </div>
            <div className="tl-date">{p.date}</div>
          </div>
          <div className="proj-tech">{p.tech}</div>
          <div className="tl-desc">{p.description}</div>
        </div>
      ))}
    </FadeIn>
  );
}