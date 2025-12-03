import Image from "next/image";

interface BlogPostProps {
  title: string;
  image: string;
  url: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const BlogPostCardExt: React.FC<BlogPostProps> = ({
  title,
  image,
  url,
  description,
  tags,
}) => {
  return (
    <div className="px-4 py-5">
      <a href={url} target="_blank">
        <div className="flex flex-col">
          <div>
            <Image src={image} alt={title} width={1000} height={420} />
          </div>
          <div className="bg-ctp-mantle/50 p-4 hover:bg-ctp-mantle-light/5">
            <h3 className="text-md py-4 text-start font-semibold uppercase tracking-wide text-ctp-lavender-dark">
              {title}
            </h3>
            <p className="text-start text-[0.8rem] text-ctp-crust-light">
              {description}
            </p>
            <div className="py-4 text-start text-[0.7rem] text-ctp-lavender-dark/70">
              {tags.map((tag, index) => (
                <span key={index}> #{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogPostCardExt;
