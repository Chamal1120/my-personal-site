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
    <div className="mx-auto w-full overflow-hidden bg-ctp-lavender-dark/5 p-4 shadow-md lg:w-[calc(50%-1rem)]">
      <div className="flex-col items-start justify-start gap-2 md:flex">
        <div className="md:shrink-0"></div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-lg font-semibold uppercase tracking-wide text-ctp-base-light">
            {title}
          </div>
          <p className="my-2 text-justify text-[0.9rem] text-ctp-base-light">
            {description}
          </p>
          <p className="my-2 text-left text-sm text-ctp-base-light">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4 pt-2">
            <button className="bg-ctp-mantle-light">
              <a
                href={sourceCodeLink}
                className="m-2 block text-left text-[1rem] font-bold text-ctp-surface0 leading-tight hover:underline"
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
