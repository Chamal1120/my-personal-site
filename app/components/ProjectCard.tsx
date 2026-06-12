import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  technologies: string;
  sourceCodeLink: string;
  previewLink: string | null | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  technologies,
  sourceCodeLink,
  previewLink,
}) => {
  return (
    <article className="bg-bg/50 hover:bg-fg/5 mx-auto flex h-full w-full flex-col overflow-hidden border border-white/30 shadow-md">
      <Link href={`/projects/${slug}`} className="block grow p-6">
        <div className="flex h-full flex-col items-start gap-4">
          <div className="text-md text-magenta font-semibold tracking-wide uppercase">
            {title}
          </div>
          <p className="text-fg text-justify text-[0.8rem]">{description}</p>
          <p className="text-fg/70 mt-auto pt-2 text-left text-[0.7rem]">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
        </div>
      </Link>
      <div className="flex flex-row gap-4 px-6 pb-6">
        <a
          href={sourceCodeLink}
          className="bg-fg/90 block px-2.5 py-2 text-left text-[0.8rem] leading-tight font-bold text-black hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        {previewLink && (
          <a
            href={previewLink}
            className="text-yellow block py-2 text-left text-sm leading-tight font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
