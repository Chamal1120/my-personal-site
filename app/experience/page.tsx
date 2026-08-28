import * as motion from "motion/react-client";

interface Role {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    title: "Intern - Engineering (API Manager Team)",
    org: "WSO2 · Colombo, Sri Lanka · On-site",
    period: "Feb 2026 — Aug 2026",
    bullets: [
      "Designed and built an AI driven patch analysis agent reaching 75% accuracy in identifying regression scenarios, parsing the patch diff alongside its linked PRs and issue history to surface gaps that existing test suite misses.",
      "Prototyped an agentic pipeline automating forward and back porting of patches across all the supported product versions.",
      "Authored a user scenario knowledge base documenting 521 test suite backed + over 2300 past issues based scenarios, enabling agentic retrieval for downstream tooling. (Utilized for patch analysis agent)",
      "Verified 21 user scenarios during manual release testing for the version 4.7.0 pre-alpha, filing 7 issues.",
    ],
  },
  {
    title: "Technical Content Creator",
    org: "dev.to/chamal1120 · youtube.com/@unixphile · Remote",
    period: "May 2024 — Present",
    bullets: [
      "Publish articles on GNU/Linux, Unix, shell scripting and CLI workflows. Captured over 63K views across 16 articles.",
      "Record and present technical videos on Unix tooling and open source software on YouTube.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <motion.h1
        className="text-fg mb-2 text-3xl font-semibold tracking-tight md:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Experience
      </motion.h1>
      <motion.p
        className="text-fg/70 mb-8 text-lg font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.08, duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Where I&apos;ve worked and what I do.
      </motion.p>
      <div className="flex flex-col">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            className="border-fg/20 border-b border-dotted pb-6 last:border-b-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1 + i * 0.05,
                duration: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-fg font-medium">{role.title}</span>
                <span className="text-fg/50 shrink-0 font-mono text-sm">
                  {role.period}
                </span>
              </div>
              <span className="text-fg/60 text-sm">{role.org}</span>
            </div>
            <ul className="text-fg/70 mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
              {role.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
