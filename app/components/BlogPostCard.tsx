import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

interface BlogPostProps {
  id?: number;
  title: string;
  image?: string | null;
  url: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const BlogPostCard: React.FC<BlogPostProps> = ({
  id,
  title,
  image,
  url,
  description,
  tags,
}) => {
  const imageSource = image || "/content-placeholder.svg";

  const content = (
    <div className="flex h-full flex-col">
      <div className="relative w-full">
        <Image
          src={imageSource}
          alt={image ? title : ""}
          width={1200}
          height={630}
          className="h-auto w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="bg-bg/50 hover:bg-fg/5 flex grow flex-col gap-4 p-4 sm:p-6">
        <h3 className="text-md text-magenta break-words text-start font-semibold tracking-wide uppercase">
          {title}
        </h3>
        <p className="text-fg line-clamp-3 break-words text-start text-[0.8rem]">
          {description}
        </p>
        <div className="text-fg/70 mt-auto break-words pt-2 text-start text-[0.8rem]">
          <FontAwesomeIcon icon={faTag} />
          {tags.map((tag, index) => (
            <span key={index}> {tag}, </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full min-h-88 border border-white/30">
      {id ? (
        <Link href={`/blog/${id}`} className="block h-full">
          {content}
        </Link>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      )}
    </div>
  );
};

export default BlogPostCard;
