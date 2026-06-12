import ProjectCard from "../components/ProjectCard";
import * as motion from "motion/react-client";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  // NOTE: Investigate the whileInView motion prop issue.
  // * Likely culprit is this directly passed const variable for data.
  // * useEffect maybe??
  return (
    <div>
      <section>
        <ul className="m-0 grid list-none grid-cols-1 items-stretch gap-6 p-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.li
              key={project.slug}
              className="h-full w-full cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{
                y: -2,
                transition: { duration: 0.5 },
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
              }}
              viewport={{ amount: 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
