// components/Timeline.tsx
import { TimelineEntry } from "@/lib/data";
import FadeIn from "./FadeIn";

interface TimelineProps {
  id: string;
  label: string;
  entries: TimelineEntry[];
}

export default function Timeline({ id, label, entries }: TimelineProps) {
  return (
    <FadeIn id={id} className="section">
      <div className="section-label">{label}</div>
      {entries.map((entry, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-top">
            <div className="tl-top-inner">
              {entry.logoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="tl-logo"
                  src={entry.logoUrl}
                  alt=""
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <div className="tl-role">{entry.role}</div>
            </div>
            <div className="tl-date">{entry.date}</div>
          </div>
          <div className="tl-desc">
            {entry.company && entry.companyUrl ? (
              <>
                <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
                {" \u2014 "}
              </>
            ) : entry.company ? (
              <>{entry.company} &mdash; </>
            ) : null}
            {entry.description}
          </div>
        </div>
      ))}
    </FadeIn>
  );
}