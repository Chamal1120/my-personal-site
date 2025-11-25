import Image from "next/image";

interface BlogPostProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const BlogPostCardInt: React.FC<BlogPostProps> = ({
  title,
  image,
  description,
  tags,
}) => {
  return (
    <div className="w-full px-5 py-10 lg:w-[calc(50%-1rem)]">
      <Image src={"/images/intro-thumbnail.webp"} alt={title} width={1000} height={420} />
      <h3 className="py-4 text-start text-lg font-semibold uppercase tracking-wide text-ctp-base-light">
        {title}
      </h3>
      <p className="text-start">{description}</p>
      <div className="py-4 text-start">
        🏷{" "}
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogPostCardInt;
