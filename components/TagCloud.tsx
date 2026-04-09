// components/TagCloud.tsx
import FadeIn from "./FadeIn";

interface TagCloudProps {
  id: string;
  label: string;
  items: string[];
}

export default function TagCloud({ id, label, items }: TagCloudProps) {
  return (
    <FadeIn id={id} className="section">
      <div className="section-label">{label}</div>
      <div className="about-tags">
        {items.map((item) => (
          <span className="about-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </FadeIn>
  );
}