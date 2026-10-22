// components/Projects.tsx
// TODO: swap imageUrl placeholders for static images — see lib/data.ts
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Projects({ stagger }: { stagger?: number }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <FadeIn id="projects" className="section" stagger={stagger}>
      <div className="section-label">projects</div>
      {projects.map((p, i) => (
        <div
          className={`project-card${expanded === i ? " expanded" : ""}`}
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
          {p.badge && <div className="project-badge">{p.badge}</div>}
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
            {[
              { url: p.githubUrl, label: "github ↗" },
              { url: p.videoUrl, label: "video ↗" },
              { url: p.devpostUrl, label: "devpost ↗" },
            ].map(
              (l) =>
                l.url && (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {l.label}
                  </a>
                )
            )}
            {p.caseStudyUrl && (
              <Link
                href={p.caseStudyUrl}
                className="contact-link project-case-link"
                onClick={(e) => e.stopPropagation()}
              >
                case study →
              </Link>
            )}
          </div>
        </div>
      ))}
    </FadeIn>
  );
}
