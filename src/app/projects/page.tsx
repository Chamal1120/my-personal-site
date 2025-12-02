import ProjectCard from "~/components/ProjectCard";
import * as motion from "motion/react-client";

export default function ProjectsPage() {
  // NOTE: Investigate the whileInView motion prop issue.
  // * Likely culprit is this directly passed const variable for data.
  // * useEffect maybe??
  // List of projects
  const projects = [
    {
      title: "CV Submission Automator",
      description:
        "An automated CV and resume processing pipeline from the submission to the employer review.",
      technologies:
        "Python 3, AWS Lambda Functions, Terraform, SendGrid, react",
      sourceCodeLink: "https://github.com/Chamal1120/cv-submission-automator",
      previewLink: null,
    },
    {
      title: "SLNIC Decoder",
      description:
        "A mobile app to decode the Sri Lankan NIC number including the figma design and a full CI/CD pipeline for testing, building and publishing signed APK releases.",
      technologies: "Flutter, GetX, Material 3, GitHub Actions",
      sourceCodeLink: "https://github.com/chamal1120/slnic-decoder",
      previewLink: null,
    },
    {
      title: "facetimehd Toggle",
      description:
        "A gtk systray applet to control the webcam kernel module for intel macbooks running GNU/Linux to overcome suspend/ resume issues.",
      technologies: "gtk3-rs, libappindicator, cargo",
      sourceCodeLink: "https://github.com/Chamal1120/facetimehd-toggle",
      previewLink: null,
    },
    {
      title: "Macbook Pro 12,1 Linux Fixes",
      description:
        "An installable aur package to get wifi, bluetooth and thermals working in GNU/Linux.",
      technologies: "bash",
      sourceCodeLink:
        "https://github.com/Chamal1120/macbookpro-12-1-linux-fix-files",
      previewLink: null,
    },
  ];

  return (
    <div>
      <section>
        <ul className="m-0 flex list-none flex-row flex-wrap gap-4 p-0 px-4 pt-4">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="w-full lg:w-[calc(50%-1rem)]"
              initial={{ opacity: 0, y: 10 }}
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
