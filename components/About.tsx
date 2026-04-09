// components/About.tsx
import { aboutText } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn id="about" className="section">
      <div className="section-label">about me</div>
      <div className="about">
        <p dangerouslySetInnerHTML={{ __html: aboutText }} />
      </div>
    </FadeIn>
  );
}