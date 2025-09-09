import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  sourceCodeLink: string;
  previewLink: string | null | undefined;
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
    <div className="mx-auto max-w-2xl overflow-hidden bg-transparent shadow-md">
      <div className="flex-col items-start justify-start gap-2 md:flex">
        <div className="md:shrink-0">
          <Image
            className="object-cover md:inline-flex"
            src={image}
            alt={title}
            width={1280}
            height={720}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-start py-6">
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
            {previewLink !== null ?
              <a
                href={previewLink}
                className="mt-1 block text-left text-sm font-medium leading-tight text-ctp-crust-light hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a> : <a> </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
