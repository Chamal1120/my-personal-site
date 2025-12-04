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
    <div className="bg-ctp-mantle/50 hover:bg-ctp-text/5 mx-auto overflow-hidden p-4 shadow-md">
      <div className="flex-col items-start justify-start gap-2 md:flex">
        <div className="md:shrink-0"></div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-md text-ctp-lavender font-semibold tracking-wide uppercase">
            {title}
          </div>
          <p className="text-ctp-text my-2 text-justify text-[0.8rem]">
            {description}
          </p>
          <p className="text-ctp-text/70 my-2 text-left text-[0.7rem]">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4 pt-2">
            <button className="bg-ctp-text/90">
              <a
                href={sourceCodeLink}
                className="text-ctp-surface0 mx-2.5 my-2 block text-left text-[0.8rem] leading-tight font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
            {previewLink !== null ? (
              <a
                href={previewLink}
                className="text-ctp-crust mt-1 block text-left text-sm leading-tight font-medium hover:underline"
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
