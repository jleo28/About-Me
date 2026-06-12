// components/Projects.tsx
// TODO: swap imageUrl placeholders for custom GIFs — see lib/data.ts
"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Projects({ stagger }: { stagger?: number }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <FadeIn id="projects" className="section" stagger={stagger}>
      <div className="section-label">projects</div>
      {projects.map((p, i) => (
        <div
          className={`project-card ${expanded === i ? "expanded" : ""}`}
          key={i}
          onClick={() => setExpanded(expanded === i ? null : i)}
        >
          {p.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.imageUrl}
              alt={`${p.name} preview`}
              className="project-image"
            />
          )}
          <div className="project-tag">{p.tag}</div>
          <div className="project-title">{p.name}</div>
          <p className="tl-desc">{p.description}</p>
          <div className="project-links">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              onClick={(e) => e.stopPropagation()}
            >
              live ↗
            </a>
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={(e) => e.stopPropagation()}
              >
                github ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </FadeIn>
  );
}
