// components/Hero.tsx
"use client";

import { taglines, cycleWords } from "@/lib/data";
import { useGreeting, useRandomTagline, useCycleWord } from "@/lib/hooks";
import FadeIn from "./FadeIn";

export default function Hero() {
  const greeting = useGreeting();
  const tagline = useRandomTagline(taglines);
  const { word, fading } = useCycleWord(cycleWords);

  return (
    <div className="hero" id="top">
      <FadeIn stagger={0}>
        <p className="hero-greeting">{greeting}</p>
      </FadeIn>
      <FadeIn stagger={1}>
        <p className="hero-tagline">{tagline}</p>
      </FadeIn>
      <FadeIn stagger={2}>
        <h1>
          I build{" "}
          <em
            className={`cycle-word ${fading ? "fading" : ""}`}
          >
            {word}
          </em>{" "}
          products at the intersection of engineering &amp; business.
        </h1>
      </FadeIn>
      <FadeIn stagger={3}>
        <p className="hero-location">Based in LA&apos;s Koreatown for now...</p>
      </FadeIn>
    </div>
  );
}