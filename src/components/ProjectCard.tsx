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
    <div className="mx-auto w-full overflow-hidden bg-ctp-mantle-dark/50  p-4 shadow-md lg:w-[calc(50%-1rem)]">
      <div className="flex-col items-start justify-start gap-2 md:flex">
        <div className="md:shrink-0"></div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-md font-semibold uppercase tracking-wide text-ctp-lavender-dark">
            {title}
          </div>
          <p className="my-2 text-justify text-[0.8rem] text-ctp-base-light">
            {description}
          </p>
          <p className="my-2 text-left text-[0.7rem] text-ctp-crust-light/70">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4 pt-2">
            <button className="bg-ctp-mantle-light">
              <a
                href={sourceCodeLink}
                className="mx-2.5 my-2 block text-left text-[0.8rem] font-bold text-ctp-surface0 leading-tight hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
            {previewLink !== null ? (
              <a
                href={previewLink}
                className="mt-1 block text-left text-sm font-medium leading-tight text-ctp-crust-light hover:underline"
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
