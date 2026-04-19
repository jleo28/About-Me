// components/Extracurriculars.tsx
import { extracurriculars } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Extracurriculars({ stagger }: { stagger?: number }) {
  return (
    <FadeIn id="extracurriculars" className="section" stagger={stagger}>
      <div className="section-label">beyond the classroom</div>
      <ul className="ec-list">
        {extracurriculars.map((ec, i) => (
          <li key={i}>
            <span className="ec-role">{ec.role}</span>{" "}
            <span className="ec-org">&mdash; {ec.org}</span>
            {ec.note && (
              <>
                <br />
                <span className="ec-note">{ec.note}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}