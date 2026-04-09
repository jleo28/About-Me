// components/Honors.tsx
"use client";

import { honors } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Honors() {
  return (
    <FadeIn id="honors" className="section">
      <div className="section-label">honor(-able mention)s</div>
      <div className="misc-grid">
        {honors.map((h, i) => (
          <div className="misc-item" key={i}>
            {h.logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="misc-logo"
                src={h.logoUrl}
                alt=""
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            )}
            <h4>{h.title}</h4>
            <div className="misc-sub">{h.subtitle}</div>
            <p>{h.description}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}