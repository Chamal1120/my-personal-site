"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BlogPostCardInt from "~/components/BlogPostCardInt";
import BlogPostCardExt from "~/components/BlogPostCardExt";
import { trpc } from "~/utils/trpc";
import Link from "next/link";

const blogOwner = "chamal1120";

// Interface for the blogpost
interface BlogPost {
  id: number;
  title: string;
  content?: string;
  cover_image?: string;
  canonical_url?: string;
  description?: string;
  tags?: string[];
}

// BlogPost component: fetches blogs and displays
export default function BlogPageContent() {
  // tRPC: internal blogs from Neon DB
  const {
    data: myBlogs,
    isLoading: myBlogsLoading,
    error: myBlogsError,
  } = trpc.blog.all.useQuery();

  // external blogs from dev.to
  const [externalPosts, setExternalPosts] = useState<BlogPost[]>([]);
  const [externalError, setExternalError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${blogOwner}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const normalized = (data as any[]).map((post) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          cover_image: post.cover_image,
          canonical_url: post.canonical_url,
          tags: Array.isArray(post.tag_list) ? post.tag_list : [],
        }));
        setExternalPosts(normalized);
      } catch (error) {
        setExternalError(`Error fetching blogs: ${(error as Error).message}`);
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs().catch(console.error);
  }, []);

  const router = useRouter();

  const handleClick = (post: any) => {
      sessionStorage.setItem("currentPost", JSON.stringify(post));
      router.push(`/blog/${post.id}`);
  }


  return (
    <section className="flex-grow px-8 pt-4">
      <div className="hidden w-full flex-grow flex-wrap">
        <h2 className="mb-4 text-2xl font-semibold">My Articles</h2>
        {myBlogsError && (
          <p className="text-red-500">Error: {myBlogsError.message}</p>
        )}
        {myBlogs && myBlogs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {myBlogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <BlogPostCardInt
                key={post.id}
                title={post.title}
                description={post.content?.slice(0, 200) ?? ""}
                image={post.imageUrl ?? ""}
                tags={post.tags ?? []}
                onClick={() => handleClick(post)}
              />
            </Link>
            ))}
          </div>
        ) : (
          !myBlogsLoading && <p>No local posts.</p>
        )}
      </div>
      {/* <h2 className="mb-4 text-2xl font-semibold">My External Articles</h2> */}
      <div className="flex w-full flex-grow flex-wrap">
        {externalError && <p className="text-red-500">{externalError}</p>}{" "}
        {externalPosts.length > 0 ? (
          externalPosts.map((post) => (
            <BlogPostCardExt
              key={post.id}
              title={post.title}
              description={post.description ?? ""}
              image={post.cover_image ?? ""}
              url={post.canonical_url ?? ""}
              tags={post.tags ?? []}
            />
          ))
        ) : (
          <div
            role="status"
            className="item-center flex min-h-screen w-full flex-grow justify-center"
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
            <span className="sr-only">Loading external posts...</span>
          </div>
        )}
      </div>
    </section>
  );
}
