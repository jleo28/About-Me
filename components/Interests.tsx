// components/Interests.tsx
import { interests } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Interests({ stagger }: { stagger?: number }) {
  return (
    <FadeIn id="littlethings" className="section" stagger={stagger}>
      <div className="section-label">the little things</div>
      <div className="interests-row">
        {interests.map((item) => (
          <span className="interest-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </FadeIn>
  );
}