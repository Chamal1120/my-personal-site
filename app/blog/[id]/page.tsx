"use client";

import { useState, useEffect, createElement, ReactNode } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogPostContent {
  title: string;
  body_markdown: string;
  cover_image: string | null;
  tags: string[];
  canonical_url: string;
}

const parseHtmlToReact = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const elements: ReactNode[] = [];

  const convertNode = (node: ChildNode, index: number): ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      const tagName = element.tagName.toLowerCase();
      const props: Record<string, unknown> = { key: index };

      Array.from(element.attributes).forEach((attr) => {
        props[attr.name === "class" ? "className" : attr.name] = attr.value;
      });

      if (tagName === "pre") {
        const codeElement = element.querySelector("code");
        if (codeElement) {
          const className = codeElement.className || "";
          const match = className.match(/language-(\w+)/);
          const language = match ? match[1] : "text";
          const code = codeElement.textContent || "";

          return (
            <SyntaxHighlighter
              key={index}
              language={language}
              style={vscDarkPlus}
              PreTag="div"
              customStyle={{
                padding: "1rem",
                borderRadius: "0.5rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              {code}
            </SyntaxHighlighter>
          );
        }
      }

      if (tagName === "code" && element.parentElement?.tagName !== "PRE") {
        return (
          <code
            key={index}
            className="rounded bg-gray-800 px-1.5 py-0.5 text-sm"
          >
            {element.textContent}
          </code>
        );
      }

      const children = Array.from(element.childNodes).map((child, i) =>
        convertNode(child, i),
      );

      return createElement(tagName, props, ...children);
    }

    return null;
  };

  Array.from(doc.body.childNodes).forEach((node, i) => {
    const element = convertNode(node, i);
    if (element) {
      elements.push(element);
    }
  });

  return elements;
};

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/devto/article/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blogPost = (await response.json()) as BlogPostContent;
        setPost(blogPost);

        if (blogPost.body_markdown) {
          const processed = await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(blogPost.body_markdown);

          const elements = parseHtmlToReact(String(processed));
          setContent(elements);
        }
      } catch (err) {
        setError(`Failed to fetch blog post: ${(err as Error).message}`);
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost().catch(console.error);
  }, [id]);

  if (loading)
    return (
      <section className="grow px-8 pt-4">
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
          <span className="sr-only">Loading blog post...</span>
        </div>
      </section>
    );

  if (error)
    return (
      <section className="grow px-8 pt-4">
        <p className="text-red-500">{error}</p>
      </section>
    );

  if (!post)
    return (
      <section className="grow px-8 pt-4">
        <p>Blog post not found.</p>
      </section>
    );

  return (
    <section className="grow px-8 pt-4">
      <div className="mx-auto max-w-3xl">
        {/** <h1 className="mb-4 text-4xl font-bold">{post.title}</h1> */}
        {post.cover_image && (
          <div className="mb-4">
            <Image
              src={post.cover_image}
              alt={post.title}
              width={1000}
              height={420}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        )}
        <div className="text-fg/70 mb-4 text-[0.8rem]">
          {post.tags?.map((tag, index) => (
            <span key={index} className="mr-2">
              #{tag}
            </span>
          ))}
        </div>
        {content.length > 0 && (
          <div className="prose prose-invert max-w-none text-left text-white">
            <style jsx>{`
              div :global(p) {
                margin-bottom: 1.5rem;
                line-height: 1.75;
              }
              div :global(img) {
                margin-top: 2rem;
                margin-bottom: 2rem;
              }
              div :global(pre) {
                margin-top: 2rem;
                margin-bottom: 2rem;
              }
              div :global(h1) {
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                font-size: 2.25rem;
                font-weight: 700;
                line-height: 1.2;
              }
              div :global(h2) {
                margin-top: 2rem;
                margin-bottom: 0.875rem;
                font-size: 1.875rem;
                font-weight: 700;
                line-height: 1.3;
              }
              div :global(h3) {
                margin-top: 1.75rem;
                margin-bottom: 0.75rem;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 1.4;
              }
              div :global(h4) {
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-size: 1.25rem;
                font-weight: 600;
                line-height: 1.4;
              }
              div :global(h5, h6) {
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                font-weight: 600;
              }
              div :global(ul) {
                margin-bottom: 1.5rem;
                list-style-type: disc;
                padding-left: 1.5rem;
              }
              div :global(ol) {
                margin-bottom: 1.5rem;
                list-style-type: decimal;
                padding-left: 1.5rem;
              }
              div :global(li) {
                margin-bottom: 0.5rem;
                line-height: 1.75;
              }
            `}</style>
            {content}
          </div>
        )}
        {post.canonical_url && (
          <p className="text-fg/50 mt-8 text-sm">
            Read the original article on{" "}
            <a
              href={post.canonical_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-magenta hover:underline"
            >
              Dev.to
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
