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
    <div className="w-full px-5 py-10 lg:w-[calc(50%-1rem)]">
      <a href={url} target="_blank">
        <Image src={image} alt={title} width={1000} height={420} />
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
