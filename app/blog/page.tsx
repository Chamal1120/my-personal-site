"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import BlogPostCard from "../components/BlogPostCard";

// Utility: Truncates a string
const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  published_timestamp: string;
  reading_time_minutes: number;
  user: object;
  organization?: object;
  flare_tag?: object;
}

// Fetches blogs and displays
export default function BlogPage() {
  const [posts, setPosts] = useState<DevToArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/devto/articles?per_page=9`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: DevToArticle[] = await response.json();
        setPosts(data);
      } catch (error) {
        setError(`Error fetching blogs: ${(error as Error).message}`);
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs().catch(console.error);
  }, []);

  return (
    <section className="grow px-8 pt-4">
      <div className="flex w-full grow flex-wrap gap-2">
        {error && <p className="text-red-500">{error}</p>}{" "}
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div
              key={post.id}
              className="w-full lg:w-[calc(50%-1rem)]"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ y: -2 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: [0, 0.71, 0.2, 1.01] },
              }}
              viewport={{ amount: 0.2 }}
            >
              <BlogPostCard
                id={post.id}
                key={post.id}
                title={truncateString(post.title, 37)}
                description={post.description ?? ""}
                image={post.cover_image ?? ""}
                url={post.canonical_url ?? ""}
                tags={post.tag_list ?? []}
              />
            </motion.div>
          ))
        ) : (
          <div
            role="status"
            className="flex min-h-screen w-full grow items-center justify-center"
          >
            <svg
              aria-hidden="true"
              className="text-fg h-8 w-8 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
                className="opacity-25"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Loading blogs...</span>
          </div>
        )}
      </div>
    </section>
  );
}
