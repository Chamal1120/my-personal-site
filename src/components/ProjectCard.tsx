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
          <p className="my-2 text-justify text-lg text-ctp-base-light">
            {description}
          </p>
          <p className="my-2 text-justify text-sm text-ctp-base-light">
            <span className="font-bold">Stack:</span> {technologies}
          </p>
          <div className="flex flex-row gap-4 py-2">
            <button
              className="bg-neutral-100 text-ctp-crust-dark"
            >
              <a
                href={sourceCodeLink}
                className="m-3 block text-left text-lg font-medium leading-tight hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
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
