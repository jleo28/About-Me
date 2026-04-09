// components/Projects.tsx
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <FadeIn id="projects" className="section">
      <div className="section-label">projects</div>
      {projects.map((p, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-top">
            <div className="tl-role">{p.name}</div>
          </div>
          <div className="tl-desc">
            {p.description}
            {p.githubUrl && (
              <>
                {" \u2014 "}
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </FadeIn>
  );
}