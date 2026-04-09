// components/Consuming.tsx
import { currentlyConsuming } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Consuming() {
  return (
    <FadeIn id="consuming" className="section">
      <div className="section-label">currently consuming</div>
      <ul className="consuming-list">
        {currentlyConsuming.map((c, i) => (
          <li key={i}>
            <em>{c.label}</em>{" "}
            {c.url ? (
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.text}
              </a>
            ) : (
              c.text
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}