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
        " A demo E-Commerce web app that fully runs on AWS serverless technologies.",
      technologies: "React, Express, AWS Lambda, AWS S3, AWS DynamoDB, AWS Codebuild and AWS CodePipeline, GitHub",
      image: "https://raw.githubusercontent.com/chamal1120/book-store/refs/heads/main/github-assets/preview.webp",
      sourceCodeLink: "https://github.com/Chamal1120/book-store",
      previewLink: "http://book-store-skyops-terraform-front.s3-website-us-east-1.amazonaws.com",
    },
    {
      title: "Notes App with K8s and a Loadbalancer",
      description:
        "A Flask Notes taking application deployed through a Kubernetes  cluster and a Loadbalancer.",
      technologies: "Flask, K8s, Docker, Git, GitHub Actions",
      image: "https://raw.githubusercontent.com/Chamal1120/flask-notes-app/refs/heads/main/previews/preview1.webp",
      sourceCodeLink: "https://github.com/Chamal1120/flask-notes-app",
      previewLink: "N/A",
    },
    {
      title: "Personal Web",
      description:
        " This website. An SPA with SSR built with T3 stack.",
      technologies: "Next.js, T3, Tailwind CSS, TypeScript, Catppuccin",
      image: "https://raw.githubusercontent.com/Chamal1120/my-personal-site/refs/heads/main/repo-assets/preview.webp",
      sourceCodeLink: "https://github.com/Chamal1120/my-personal-site",
      previewLink: "https://chamal1120.vercel.app",
    },
    {
      title: "My Linux Dots",
      description:
        "Dotfiles in my current linux installations.",
      technologies: "Git, Bash, Grep, Catppuccin",
      image: "https://raw.githubusercontent.com/Chamal1120/dotfiles/refs/heads/main/previews/preview2.webp",
      sourceCodeLink: "https://github.com/Chamal1120/my-personal-site",
      previewLink: "https://chamal1120.vercel.app",
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

