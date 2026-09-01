import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown, { type UrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import { getProjectBySlug } from "../projectsData";
import BackLink from "../../components/BackLink";

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

interface GitHubReadme {
  content: string;
  download_url: string;
  html_url: string;
}

interface Readme {
  markdown: string;
  downloadUrl: string;
  htmlUrl: string;
}

const getRepository = (sourceCodeLink: string) => {
  const url = new URL(sourceCodeLink);
  const [owner, repository] = url.pathname.split("/").filter(Boolean);

  if (url.hostname !== "github.com" || !owner || !repository) {
    throw new Error(`Unsupported GitHub repository URL: ${sourceCodeLink}`);
  }

  return {
    owner,
    repository: repository.replace(/\.git$/, ""),
  };
};

const rewriteUrl = (
  value: string,
  baseUrl: string,
  allowedProtocols: string[],
) => {
  if (value.startsWith("#")) {
    return value;
  }

  try {
    const url = new URL(value, baseUrl);
    return allowedProtocols.includes(url.protocol) ? url.toString() : undefined;
  } catch {
    return undefined;
  }
};

const createUrlTransform =
  ({ downloadUrl, htmlUrl }: Readme): UrlTransform =>
  (url, key) =>
    key === "src"
      ? rewriteUrl(url, downloadUrl, ["http:", "https:"])
      : rewriteUrl(url, htmlUrl, ["http:", "https:", "mailto:"]);

const fetchReadme = async (sourceCodeLink: string) => {
  const { owner, repository } = getRepository(sourceCodeLink);
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "chamal1120-personal-site",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repository}/readme`,
    {
      headers,
      next: {
        revalidate: ONE_WEEK_IN_SECONDS,
        tags: [`project-readme-${owner}-${repository}`],
      },
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `GitHub README request failed with status ${response.status}`,
    );
  }

  const readme = (await response.json()) as GitHubReadme;
  const markdown = Buffer.from(
    readme.content.replace(/\n/g, ""),
    "base64",
  ).toString("utf8");

  return {
    markdown,
    downloadUrl: readme.download_url,
    htmlUrl: readme.html_url,
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.title} | Chamal1120` : "Project | Chamal1120",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const readme = await fetchReadme(project.sourceCodeLink);

  return (
    <section className="w-full text-left">
      <BackLink href="/projects">back to projects</BackLink>
      <header className="border-fg/20 mb-8 border-b border-dotted pb-6">
        <h1 className="text-fg mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="text-fg/70 mt-3">{project.description}</p>
        <a
          href={project.sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow hover:text-cyan mt-4 inline-block text-sm transition-colors hover:underline"
        >
          View source code
        </a>
      </header>
      {readme ? (
        <article className="readme-content text-fg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            urlTransform={createUrlTransform(readme)}
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target={href?.startsWith("#") ? undefined : "_blank"}
                  rel={
                    href?.startsWith("#") ? undefined : "noopener noreferrer"
                  }
                >
                  {children}
                </a>
              ),
            }}
          >
            {readme.markdown}
          </ReactMarkdown>
        </article>
      ) : (
        <p className="text-fg">This repository does not have a README.</p>
      )}
    </section>
  );
}
