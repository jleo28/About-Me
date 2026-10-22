// app/projects/porttable/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { portTableCaseStudy as cs } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import FadeIn from "@/components/FadeIn";
import CaseScreenshots from "@/components/CaseScreenshots";

export const metadata: Metadata = {
  title: "PortTable · Joseph Leo",
  description: cs.summary,
};

export default function PortTablePage() {
  return (
    <>
      <ThemeToggle />
      <div className="page-wrap">
        <Link href="/#projects" className="case-back">
          ← back to jleo.me
        </Link>

        <FadeIn stagger={0} className="case-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="case-logo" src={cs.logoUrl} alt="PortTable logo" />
          <div className="project-badge">{cs.badge}</div>
          <h1>{cs.name}</h1>
          <p className="case-summary">{cs.summary}</p>
          <div className="case-meta">
            {cs.event}
            <br />
            team: {cs.team}
            <br />
            {cs.timeframe}
          </div>
          <div className="about-tags">
            {cs.tags.map((t) => (
              <span className="about-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="project-links">
            {cs.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn stagger={1} className="section case-body">
          <div className="section-label">the problem</div>
          {cs.problem.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>{cs.dualUse}</p>
        </FadeIn>

        <FadeIn stagger={2} className="section">
          <div className="section-label">what we built</div>
          <ul className="case-list">
            {cs.built.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
          <p className="case-note">{cs.honesty}</p>
        </FadeIn>

        <FadeIn stagger={3} className="section">
          <div className="section-label">my role</div>
          <ul className="case-list">
            {cs.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn stagger={4} className="section case-body">
          <div className="section-label">outcome</div>
          <p>{cs.outcome}</p>
        </FadeIn>

        <FadeIn stagger={5} className="section">
          <div className="section-label">what I learned</div>
          {cs.learned.map((l, i) => (
            <p className="case-quote" key={i}>
              {l}
            </p>
          ))}
        </FadeIn>

        <CaseScreenshots shots={cs.screenshots} note={cs.screenshotsNote} />

        <footer>
          <Link href="/#projects" className="case-back" style={{ marginBottom: 0 }}>
            ← back to jleo.me
          </Link>
        </footer>
      </div>
    </>
  );
}
