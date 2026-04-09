// components/NavDots.tsx
"use client";

import { useActiveSection } from "@/lib/hooks";

const sections = [
  { id: "top", label: "top" },
  { id: "about", label: "about me" },
  { id: "skills", label: "skills" },
  { id: "languages", label: "languages" },
  { id: "currently", label: "currently" },
  { id: "previously", label: "previously" },
  { id: "projects", label: "projects" },
  { id: "honors", label: "honors" },
  { id: "extracurriculars", label: "beyond the classroom" },
  { id: "consuming", label: "currently consuming" },
  { id: "littlethings", label: "the little things" },
  { id: "contact", label: "contact" },
];

export default function NavDots() {
  const active = useActiveSection(sections.map((s) => s.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="nav-dots">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`nav-dot ${active === s.id ? "active" : ""}`}
          data-label={s.label}
          onClick={() => scrollTo(s.id)}
          aria-label={`Scroll to ${s.label}`}
        />
      ))}
    </div>
  );
}