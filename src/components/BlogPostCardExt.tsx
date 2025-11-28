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
    <div className="w-full px-5 py-10 lg:w-[calc(50%-1rem)]">
      <a href={url} target="_blank">
        <div className="flex flex-col">
          <div>
            <Image src={image} alt={title} width={1000} height={420} />
          </div>
          <div className="bg-ctp-mantle/60 p-4">
            <h3 className="text-md py-4 text-ctp-lavender-dark text-start font-semibold uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-start  text-ctp-crust-light text-[0.8rem]">{description}</p>
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
