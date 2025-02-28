interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  sourceCodeLink: string;
  previewLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  sourceCodeLink,
  previewLink,
}) => {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden bg-ctp-mantle shadow-md">
      <div className="flex-col items-start justify-start md:flex gap-2">
        <div className="md:shrink-0">
          <img
            className="hidden object-cover md:inline-flex md:h-auto md:w-full"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col items-start justify-start p-8">
          <div className="text-lg font-semibold uppercase tracking-wide text-ctp-base-light">
            {title}
          </div>
          <p className="mt-2 text-justify text-sm text-ctp-base-light">
            {description}
          </p>
          <p className="mt-2 text-justify text-[0.8rem] text-ctp-base-light">
            <span className="font-bold">Technologies:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4">
            <a
              href={sourceCodeLink}
              className="mt-1 block text-left text-sm font-medium leading-tight text-ctp-crust-light hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href={previewLink}
              className="mt-1 block text-left text-sm font-medium leading-tight text-ctp-crust-light hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live version
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
