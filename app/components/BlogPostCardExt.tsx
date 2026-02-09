import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  id?: number; // Make id optional
  title: string;
  image: string;
  url: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const BlogPostCardExt: React.FC<BlogPostProps> = ({
  id,
  title,
  image,
  url,
  description,
  tags,
}) => {
  const content = (
    <div className="flex flex-col">
      <div>
        <Image src={image} alt={title} width={1000} height={420} />
      </div>
      <div className="bg-bg/50 hover:bg-fg/5 p-4">
        <h3 className="text-md text-magenta py-4 text-start font-semibold tracking-wide uppercase">
          {title}
        </h3>
        <p className="text-fg line-clamp-3 text-start text-[0.8rem]">
          {description}
        </p>
        <div className="text-fg/70 py-4 text-start text-[0.7rem]">
          {tags.map((tag, index) => (
            <span key={index}> #{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-88 border border-white/30">
      {id ? (
        <Link href={`/blog/${id}`} passHref>
          {content}
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default BlogPostCardExt;
