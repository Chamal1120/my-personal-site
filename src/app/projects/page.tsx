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
  ];

  return (
    <div>
      <section className="flex flex-row flex-wrap gap-4 pt-4 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
