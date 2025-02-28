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
    <div className="max-w-2xl">
      <a href={url} target="_blank">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
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
