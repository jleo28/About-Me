// components/FadeIn.tsx
"use client";

import { useFadeIn } from "@/lib/hooks";

const STAGGER_BASE = 100;
const STAGGER_STEP = 120;

interface FadeInProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  id?: string;
  as?: "div" | "section";
}

export default function FadeIn({
  children,
  stagger,
  className = "",
  id,
  as: Tag = "div",
}: FadeInProps) {
  const mountDelay = stagger !== undefined ? STAGGER_BASE + stagger * STAGGER_STEP : undefined;
  const { ref, visible } = useFadeIn(0.1, mountDelay);
  return (
    <Tag
      ref={ref}
      id={id}
      className={`fade-in ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}