"use client";
import { useState, useEffect } from "react";
import BlogPostCard from "~/components/BlogPostCard";

interface BlogPost {
  id: number;
  title: string;
  cover_image: string;
  canonical_url: string;
  description: string;
  tags: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=chamal1120");

        if (!response.ok) {
          // If the response is not okay (status code 2xx), throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data); // Update state with the fetched data
      } catch (error) {
        setError(`Error fetching blogs: ${(error as Error).message}`); // Handle errors by setting error state
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(); // Call the async function immediately
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <section>
      <h2 className="text-3xl text-bold py-36">Check out what I write.</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display an error if there is */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.cover_image}
            url={post.canonical_url}
            tags={post.tags}
          />
        ))
      ) : (
        <p>Loading Blogs...</p>
      )}
    </section>
  );
};

export default BlogPage;

