import ProjectCard from "~/components/ProjectCard";

export default function ProjectsPage() {
  // List of projects
  const projects = [
    {
      title: "CV Submission Automator",
      description:
        "A CV processing pipeline from the CV  submission to employer review. Check out more info from the source code repo.",
      technologies: "Python, AWS Lambda Functions, Sendgrid, AWS SES, AWS Codebuild and Codepipeline, Terraform, Github Actions, Google Sheets API ",
      image:
        "https://raw.githubusercontent.com/Chamal1120/cv-submission-automator/refs/heads/main/previews/preview_01.webp",
      sourceCodeLink: "https://github.com/Chamal1120/cv-submission-automator",
      previewLink: null,
    },
    {
      title: "SLNIC Decoder",
      description:
        "A flutter app to decode the Sri Lankan NIC (National Identity Card) number.",
      technologies: "Flutter, GetX, Material 3, GitHub Actions",
      image:
        "https://raw.githubusercontent.com/Chamal1120/slnic-decoder/refs/heads/main/repo-assets/cover.webp",
      sourceCodeLink: "https://github.com/chamal1120/slnic-decoder",
      previewLink: null,
    },
    {
      title: "My Linux Dots",
      description: "Dotfiles in my current linux installations.",
      technologies: "Git, Bash, Grep, Catppuccin",
      image:
        "https://raw.githubusercontent.com/Chamal1120/dotfiles/refs/heads/main/.github/previews/2025-07-31-180431_hyprshot.webp",
      sourceCodeLink: "https://github.com/Chamal1120/dotfies",
      previewLink: null,
    },
  ];

  return (
    <div>
      <h2 className="pt-36 text-3xl font-bold">Things I&apos;ve built.</h2>
      <section className="flex flex-col items-center justify-start gap-8 space-y-8 pt-28 px-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
