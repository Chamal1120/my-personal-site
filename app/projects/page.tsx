import ProjectCard from "../components/ProjectCard";
import * as motion from "motion/react-client";

export default function ProjectsPage() {
  // NOTE: Investigate the whileInView motion prop issue.
  // * Likely culprit is this directly passed const variable for data.
  // * useEffect maybe??
  // List of projects
  const projects = [
    {
      title: "An LLM based code completion engine",
      description:
        "Extracts the function signatures of empty functions and generates the implementation using an LLM of choice with support for user-provided contextual snippets.",
      technologies:
        "Rust(serde, Treesitter, Tokio, Reqwest), Lua (lua neovim api, uv)",
      sourceCodeLink: "https://github.com/Chamal1120/chace",
      previewLink: null,
    },
    {
      title: "High performance code linter using Rust (FYP)",
      description:
        "A reference code linter implementation targetted for Ballerina language using Rust ecosystem. This studies the viability of Rust for implementing code analysis tools for other languages.",
      technologies: "Rust (serde, clap, toml)",
      sourceCodeLink: "https://github.com/RuztyCrabs/Blazelint",
      previewLink: null,
    },
    {
      title: "An automated resume processing pipeline",
      description:
        "Provides a fully automated workflow from the candidate’s submission to the recruiter’s review. Lambda functions provides robust scalability while being cost efficient (1 million applications per month costs only 28 USD).",
      technologies:
        "Python 3, AWS Lambda Functions, Terraform, SendGrid, react",
      sourceCodeLink: "https://github.com/Chamal1120/cv-submission-automator",
      previewLink: null,
    },
    {
      title: "facetimehd Toggle",
      description:
        "A gtk systray applet to control the webcam kernel module for intel macbooks running GNU/Linux to overcome suspend/ resume issues. This can also increase the privacy as the toggler detaches the driver from kernel.",
      technologies: "gtk3-rs, libappindicator, cargo",
      sourceCodeLink: "https://github.com/Chamal1120/facetimehd-toggle",
      previewLink: null,
    },
    {
      title: "SLNIC Decoder",
      description:
        "A mobile app to decode the Sri Lankan NIC number that follows latest material 3 design. Implemented a full CI/CD pipeline for testing, building and publishing signed APK releases. There's also a 1:1 Figma prototype.",
      technologies: "Flutter, GetX, Material 3, GitHub Actions",
      sourceCodeLink: "https://github.com/chamal1120/slnic-decoder",
      previewLink: null,
    },
    {
      title: "Macbook Pro 12,1 Linux Fixes",
      description:
        "An installable aur package to get wifi, bluetooth and thermals working in GNU/Linux. This combines many fixes that I have salvaged from rubreddits, arch wiki and other various conversation threads",
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
              className="w-full cursor-default lg:w-[calc(50%-1rem)]"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{
                y: -3,
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
