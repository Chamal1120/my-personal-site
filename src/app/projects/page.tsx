import ProjectCard from "~/components/ProjectCard";

export default function ProjectsPage() {
  // List of projects
  const projects = [
    {
      title: "CV Submission Automator",
      description:
        "An automated CV processing pipeline from the CV  submission to employer review.",
      technologies: "Python, AWS, Terraform, SendGrid",
      sourceCodeLink: "https://github.com/Chamal1120/cv-submission-automator",
      previewLink: null,
    },
    {
      title: "SLNIC Decoder",
      description:
        "A flutter app to decode the Sri Lankan NIC (National Identity Card) number.",
      technologies: "Flutter, GetX, Material 3, GitHub Actions",
      sourceCodeLink: "https://github.com/chamal1120/slnic-decoder",
      previewLink: null,
    },
    {
      title: "facetimehd Toggle",
      description:
        "A gtk systray applet to control the webcam kernel module for intel macbooks running GNU/Linux.",
      technologies: "gtk3-rs, libappindicator, modprobe, cargo",
      sourceCodeLink: "https://github.com/Chamal1120/facetimehd-toggle",
      previewLink: null,
    },
    {
      title: "Macbook Pro 12,1 Linux Fixes",
      description:
        "An installable all-in-one fix package to get wifi, bluetooth and thermals working in GNU/Linux.",
      technologies: "gtk3-rs, libappindicator, modprobe, cargo",
      sourceCodeLink:
        "https://github.com/Chamal1120/macbookpro-12-1-linux-fix-files",
      previewLink: null,
    },
  ];

  return (
    <div>
      <section className="flex flex-row flex-wrap gap-4 px-4 pt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
