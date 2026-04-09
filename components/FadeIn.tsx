// components/FadeIn.tsx
"use client";

import { useFadeIn } from "@/lib/hooks";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "section";
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  id,
  as: Tag = "div",
}: FadeInProps) {
  const { ref, visible } = useFadeIn();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`fade-in ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}