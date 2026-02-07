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
        <ul className="m-0 flex list-none flex-row flex-wrap gap-2 p-0 px-4 pt-4">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="w-full cursor-default lg:w-[calc(50%-1rem)]"
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
              <ProjectCard key={index} {...project} />
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
