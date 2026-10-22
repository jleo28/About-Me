// components/CaseScreenshots.tsx
"use client";

import { useState } from "react";
import { CaseStudyScreenshot } from "@/lib/data";

// Renders only the screenshots whose files exist; hides the whole
// section if none have been added yet.
export default function CaseScreenshots({
  shots,
  note,
}: {
  shots: CaseStudyScreenshot[];
  note?: string;
}) {
  const [missing, setMissing] = useState<string[]>([]);
  const visible = shots.filter((s) => !missing.includes(s.src));
  if (visible.length === 0) return null;

  return (
    <div className="section">
      <div className="section-label">screenshots</div>
      {note && <p className="case-note" style={{ marginTop: 0, marginBottom: "1rem" }}>{note}</p>}
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
