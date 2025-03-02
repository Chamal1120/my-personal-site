import Image from "next/image";

interface BlogPostProps {
  title: string;
  image: string;
  url: string;
  description: string;
  tags: string;
}

const BlogPostCard: React.FC<BlogPostProps> = ({
  title,
  image,
  url,
  description,
  tags,
}) => {
  return (
    <div className="max-w-2xl py-10">
      <a href={url} target="_blank">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={420}
          layout="responsive"
        />
        <h3 className="py-4 text-start text-lg font-semibold uppercase tracking-wide text-ctp-base-light">
          {title}
        </h3>
        <p className="text-start">{description}</p>
        <div className="py-4 text-start">
          🏷{" "}
          {tags.split(",").map((tag, index) => (
            <span key={index}> #{tag.trim()} </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default BlogPostCard;
