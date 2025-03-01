"use client"; // Enforce to render on client side

import { useState, useEffect } from "react";
import BlogPostCard from "~/components/BlogPostCard";

// Shape of the BlogPost
interface BlogPost {
  id: number;
  title: string;
  cover_image: string;
  canonical_url: string;
  description: string;
  tags: string;
}

const BlogPage = () => {

  // Store the BlogPosts and errors
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetches the BlogPost list and update state variables
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=chamal1120",
        );

        if (!response.ok) {
          // If the response is not okay (status code 4xx), throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BlogPost[] = (await response.json()) as BlogPost[];
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setPosts(data); // Update BlogPosts variable
      } catch (error) {
        setError(`Error fetching blogs: ${(error as Error).message}`); // Update Error if there is
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs().catch(console.error);
  }, []);

  return (
    <section>
      <h2 className="text-bold py-36 text-3xl">Things I&apos;ve wrote.</h2>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display an error if there is */}
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
        // NOTE:: This will be replaced with a loading spinner someday :)
        <p>Loading Blogs...</p>
      )}
    </section>
  );
};

export default BlogPage;
