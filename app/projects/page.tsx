import Link from "next/link";
import * as motion from "motion/react-client";
import ArrowLink from "../components/ArrowLink";
import { projects } from "./projectsData";

export default function ProjectsPage() {
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
        Projects
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
        Things I&apos;ve built.
      </motion.p>
      <ul className="space-y-8">
        {projects.map((project, i) => (
          <motion.li
            key={project.slug}
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
            <div className="flex items-baseline justify-between gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="text-fg hover:text-yellow font-medium transition-colors"
              >
                {project.title}
              </Link>
              <ArrowLink href={project.sourceCodeLink} external>
                view source
              </ArrowLink>
            </div>
            <p className="text-fg/60 mt-1 text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-fg/40 mt-2 font-mono text-xs">
              {project.technologies}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
