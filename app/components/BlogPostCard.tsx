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
      <div className="relative aspect-[50/21] w-full overflow-hidden">
        <Image
          src={imageSource}
          alt={image ? title : ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-bg/50 hover:bg-fg/5 flex grow flex-col gap-4 p-6">
        <h3 className="text-md text-magenta text-start font-semibold tracking-wide uppercase">
          {title}
        </h3>
        <p className="text-fg line-clamp-3 text-start text-[0.8rem]">
          {description}
        </p>
        <div className="text-fg/70 mt-auto pt-2 text-start text-[0.8rem]">
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
