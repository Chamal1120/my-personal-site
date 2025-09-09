"use client"; // Enforce to render on client side

import { useState, useEffect } from "react";
import BlogPostCard from "~/components/BlogPostCard";

const blogOwner = "chamal1120";

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
          `https://dev.to/api/articles?username=${blogOwner}`,
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
        setError(`Error fetching blogs: ${(error as Error).message}`);
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs().catch(console.error);
  }, []);

  return (
    <section>
      <h2 className="py-36 text-3xl font-bold">Things I&apos;ve written.</h2>
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
        <div
          role="status"
          className="item-center flex min-h-screen justify-center"
        >
          <svg
            aria-hidden="true"
            className="h-8 w-8 animate-spin fill-ctp-crust-light text-ctp-crust-dark dark:text-ctp-crust-dark"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
