// lib/hooks.ts
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook that returns a ref and a boolean indicating
 * whether the element has scrolled into view.
 */
export function useFadeIn(threshold = 0.1, mountDelay?: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mountDelay !== undefined) {
      const t = setTimeout(() => setVisible(true), mountDelay);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, mountDelay]);

  return { ref, visible };
}

/**
 * Hook that cycles through an array of strings at
 * a given interval with a fade transition.
 */
export function useCycleWord(words: string[], interval = 2000) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFading(false);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return { word: words[index], fading };
}

/**
 * Hook that returns a time-based greeting.
 */
export function useGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) setGreeting("Morning! I'm Joe \u{1F44B}");
    else if (h >= 12 && h < 17) setGreeting("Afternoon! I'm Joe \u{1F44B}");
    else if (h >= 17 && h < 21) setGreeting("Evening! I'm Joe \u{1F44B}");
    else setGreeting("Fellow night owl, I'm Joe \u{1F44B}");
  }, []);

  return greeting;
}

/**
 * Hook that picks a random tagline on mount.
 */
export function useRandomTagline(taglines: string[]) {
  const [tagline, setTagline] = useState("");
  useEffect(() => {
    setTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  }, [taglines]);
  return tagline;
}

/**
 * Hook for tracking active section via IntersectionObserver.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}