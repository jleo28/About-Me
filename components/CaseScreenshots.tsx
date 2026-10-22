// components/CaseScreenshots.tsx
"use client";

import { useState } from "react";
import { CaseStudyScreenshot } from "@/lib/data";

// Renders only the screenshots whose files exist; hides the whole
// section if none have been added yet.
export default function CaseScreenshots({ shots }: { shots: CaseStudyScreenshot[] }) {
  const [missing, setMissing] = useState<string[]>([]);
  const visible = shots.filter((s) => !missing.includes(s.src));
  if (visible.length === 0) return null;

  return (
    <div className="section">
      <div className="section-label">screenshots</div>
      <div className="case-shots">
        {visible.map((s) => (
          <figure key={s.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.caption}
              loading="lazy"
              onError={() => setMissing((m) => [...m, s.src])}
            />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
