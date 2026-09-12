// components/Extracurriculars.tsx
import { extracurriculars } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Extracurriculars({ stagger }: { stagger?: number }) {
  return (
    <FadeIn id="extracurriculars" className="section" stagger={stagger}>
      <div className="section-label">beyond the classroom</div>
      {extracurriculars.map((ec, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-top">
            <div className="tl-top-inner">
              {ec.logoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="tl-logo"
                  src={ec.logoUrl}
                  alt=""
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <div className="tl-role">{ec.role}</div>
            </div>
          </div>
          <div className="tl-desc">
            {ec.company && ec.companyUrl ? (
              <>
                <a href={ec.companyUrl} target="_blank" rel="noopener noreferrer">
                  {ec.company}
                </a>
                {" — "}
              </>
            ) : ec.company ? (
              <>{ec.company} &mdash; </>
            ) : (
              <>{ec.org} &mdash; </>
            )}
            {ec.note}
          </div>
        </div>
      ))}
    </FadeIn>
  );
}
