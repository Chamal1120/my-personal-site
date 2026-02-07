interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  sourceCodeLink: string;
  previewLink: string | null | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  sourceCodeLink,
  previewLink,
}) => {
  return (
    <div className="bg-bg/50 hover:bg-fg/5 mx-auto overflow-hidden border border-white/30 p-4 shadow-md">
      <div className="flex-col items-start justify-start gap-2 md:flex">
        <div className="md:shrink-0"></div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-md text-magenta font-semibold tracking-wide uppercase">
            {title}
          </div>
          <p className="text-fg my-2 text-justify text-[0.8rem]">
            {description}
          </p>
          <p className="text-fg/70 my-2 text-left text-[0.7rem]">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4 pt-2">
            <button className="bg-fg/90">
              <a
                href={sourceCodeLink}
                className="mx-2.5 my-2 block text-left text-[0.8rem] leading-tight font-bold text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
            {previewLink !== null ? (
              <a
                href={previewLink}
                className="text-bg mt-1 block text-left text-sm leading-tight font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            ) : (
              <a> </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
