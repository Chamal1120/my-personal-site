import ProjectCard from "~/components/ProjectCard";

export default function ProjectsPage() {
  // List of projects
  const projects = [
    {
      title: "SLNIC Decoder",
      description:
        "A flutter app to decode the Sri Lankan NIC (National Identity Card) number.",
      technologies: "Flutter, GetX, Material 3, GitHub Actions",
      image: "https://raw.githubusercontent.com/Chamal1120/slnic-decoder/refs/heads/main/repo-assets/cover.webp",
      sourceCodeLink: "https://github.com/chamal1120/slnic-decoder",
      previewLink: "https://github.com/chamal1120/releases",
    },
    {
      title: "Fully Serverless E-commerce App",
      description:
        " A demo E-Commerce web app that fully runs on AWS serverless technologies",
      technologies: "React, Express, AWS Lambda, AWS S3, AWS DynamoDB, AWS Codebuild and AWS CodePipeline, GitHub",
      image: "https://raw.githubusercontent.com/chamal1120/book-store/refs/heads/main/github-assets/preview.webp",
      sourceCodeLink: "https://github.com/your-portfolio",
      previewLink: "https://your-portfolio.com",
    },
    {
      title: "Personal Web",
      description:
        " This website. An SPA with SSR built with T3 stack.",
      technologies: "Next.js, T3, Tailwind CSS, TypeScript, Catppuccin",
      image: "https://raw.githubusercontent.com/Chamal1120/my-personal-site/refs/heads/main/repo-assets/preview.webp",
      sourceCodeLink: "https://github.com/Chamal1120/my-personal-site",
      previewLink: "https://your-portfolio.com",
    },
  ];

  return (
    <div>
    <h2 className="text-3xl font-bold pt-36">Things I&apos;ve built.</h2>
    <section className="flex flex-col items-center justify-start space-y-8 gap-8 pt-28">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
    </div>
  );
}

