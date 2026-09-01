"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BackLink from "../components/BackLink";

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
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `/api/devto/articles?per_page=10&page=${page}`,
        );

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
  }, [page]);

  return (
    <section>
      <BackLink />
      <motion.h1
        className="text-fg mb-2 text-3xl font-semibold tracking-tight md:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Writing
      </motion.h1>
      <motion.p
        className="text-fg/70 mb-8 text-lg font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.08, duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        My latest posts from Dev.to.
      </motion.p>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="flex items-baseline justify-between gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 + i * 0.05,
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                },
              }}
            >
              <Link
                href={`/blog/${post.id}`}
                className="text-fg hover:underline text-[0.95rem]"
              >
                {truncateString(post.title, 70)}
              </Link>
              <span className="text-fg/50 shrink-0 font-mono text-sm">
                {post.reading_time_minutes} min
              </span>
            </motion.article>
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="flex w-full items-center justify-center py-16"
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
          <span className="sr-only">Loading blog posts...</span>
        </div>
      )}

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => changePage(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="text-fg/60 hover:text-yellow disabled:text-fg/20 cursor-pointer rounded-full px-2.5 py-2 transition duration-150 ease-in-out active:scale-90"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <span className="text-fg/50 font-mono text-sm">page {page}</span>
        <button
          onClick={() => changePage(page + 1)}
          disabled={posts.length < 10}
          className="text-fg/60 hover:text-yellow disabled:text-fg/20 cursor-pointer rounded-full px-2.5 py-2 active:scale-90"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}

