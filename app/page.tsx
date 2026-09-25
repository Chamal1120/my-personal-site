"use client"

import { useEffect, useState } from "react"
import * as motion from "motion/react-client"
import Link from "next/link"
import Image from "next/image"
import { projects } from "./projects/projectsData"
import { configData } from "./config/configData"
import ArrowLink from "./components/ArrowLink"
import Section from "./components/Section"
import ThemeSwitcher from "./components/ThemeSwitcher"

const EASE: [number, number, number, number] = [0, 0.71, 0.2, 1.01]

const createFade = (delay: number) => ({
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { delay, duration: 0.7, ease: EASE },
    },
})

interface Writing {
    id: number
    title: string
    reading_time_minutes: number
    slug: string
}

const truncate = (str: string, num: number) =>
    str.length > num ? str.slice(0, num) + "..." : str

export default function HomePage() {
    const [writing, setWriting] = useState<Writing[]>([])

    useEffect(() => {
        const fetchWriting = async () => {
            try {
                const res = await fetch(`/api/devto/articles?per_page=5&page=1`)
                if (!res.ok) return
                const data = (await res.json()) as Writing[]
                setWriting(data)
            } catch {
                /* ignore */
            }
        }
        fetchWriting().catch(console.error)
    }, [])

    const socials = [
        {
            label: "em",
            href: "mailto:chamal.randika.mcr@gmail.com",
            title: "Email",
        },
        {
            label: "gh",
            href: "https://github.com/Chamal1120/",
            title: "GitHub",
        },
        {
            label: "yt",
            href: "https://www.youtube.com/@unixphile",
            title: "YouTube",
        },
        {
            label: "li",
            href: "https://www.linkedin.com/in/chamalrandika/",
            title: "LinkedIn",
        },
    ]

    const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(
        "dark"
    )

    useEffect(() => {
        const update = () => {
            const root = document.documentElement
            if (root.dataset.theme) {
                setEffectiveTheme(
                    root.dataset.theme === "light" ? "light" : "dark"
                )
            } else {
                setEffectiveTheme(
                    window.matchMedia("(prefers-color-scheme: light)").matches ?
                        "light"
                    :   "dark"
                )
            }
        }
        update()
        const mq = window.matchMedia("(prefers-color-scheme: light)")
        window.addEventListener("themechange", update)
        window.addEventListener("storage", update)
        mq.addEventListener("change", update)
        return () => {
            window.removeEventListener("themechange", update)
            window.removeEventListener("storage", update)
            mq.removeEventListener("change", update)
        }
    }, [])

    const graphTheme =
        effectiveTheme === "light" ?
            {
                colors: "f5ebf7,cdb9d2,b093b8,9774a0,7f5c86",
                textColor: "141415",
                darkMode: "false",
            }
        :   {
                colors: "1f1b14,3a3524,6b5f30,b08b40,f3be7c",
                textColor: "cdcdcd",
                darkMode: "true",
            }

    const contributionGraphUrl =
        `/api/github/contributions` +
        `?colors=${graphTheme.colors}` +
        `&textColor=${graphTheme.textColor}` +
        `&darkMode=${graphTheme.darkMode}`

    return (
        <div>
            {/* Hero */}
            <motion.header className="mb-12" initial="hidden" animate="show">
                <div className="flex flex-row place-content-between">
                    <motion.h1
                        variants={createFade(0)}
                        className="relative mb-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl"
                    >
                        Chamal1120
                    </motion.h1>
                    <ThemeSwitcher />
                </div>
                <motion.p
                    variants={createFade(0.08)}
                    className="mb-4 text-lg font-medium text-fg/70"
                >
                    Computer person · open source lover · writer
                </motion.p>
                <motion.nav
                    variants={createFade(0.14)}
                    className="mb-6 flex items-center gap-3 text-sm font-medium"
                >
                    {socials.map((social, i) => (
                        <span
                            key={social.href}
                            className="flex items-center gap-3"
                        >
                            {i > 0 && <span className="text-fg/40">·</span>}
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.title}
                                className="social-link text-yellow transition-colors hover:text-cyan"
                            >
                                {social.label}
                            </a>
                        </span>
                    ))}
                </motion.nav>
                <motion.p
                    variants={createFade(0.2)}
                    className="mb-4 max-w-prose text-base leading-relaxed text-fg/80"
                >
                    I&apos;m a computer person, open source lover, writer, PC
                    builds enthusiast, gamer and a keyboard nerd focused on
                    systems designing, web dev and agentic automation. I go by
                    the alias{" "}
                    <span className="text-yellow">
                        <a href="https://github.com/chamal1120" target="blank">
                            Chamal1120
                        </a>
                    </span>{" "}
                    online (dev work).
                </motion.p>
                <motion.p variants={createFade(0.26)} className="mb-3">
                    <ArrowLink href="/about">read my full story</ArrowLink>
                </motion.p>
            </motion.header>

            {/* Writing */}
            <Section title="Writing">
                <div className="space-y-4">
                    {writing.length === 0 ?
                        <p className="text-sm text-fg/50">
                            Loading latest writing...
                        </p>
                    :   writing.map((post) => (
                            <article
                                key={post.id}
                                className="group flex items-baseline justify-between gap-4"
                            >
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="text-[0.95rem] text-fg hover:underline"
                                >
                                    {truncate(post.title, 60)}
                                </Link>
                                <span className="shrink-0 font-mono text-sm text-fg/50">
                                    {post.reading_time_minutes} min
                                </span>
                            </article>
                        ))
                    }
                    <div className="pt-1">
                        <ArrowLink href="/blog">all writings</ArrowLink>
                    </div>
                </div>
            </Section>

            {/* Projects */}
            <Section title="Projects">
                <div className="space-y-5">
                    {projects.slice(0, 3).map((project) => (
                        <article key={project.slug}>
                            <div className="flex items-baseline justify-between gap-4">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="font-medium text-fg transition-colors hover:text-yellow"
                                >
                                    {project.title}
                                </Link>
                                <ArrowLink
                                    href={project.sourceCodeLink}
                                    external
                                >
                                    source
                                </ArrowLink>
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-fg/60">
                                {project.description}
                            </p>
                        </article>
                    ))}
                    <div className="pt-1">
                        <ArrowLink href="/projects">all projects</ArrowLink>
                    </div>
                </div>
            </Section>

            {/* Things I use */}
            <Section title="Things I use">
                <div className="space-y-2">
                    {configData.slice(0, 5).map((item, i) => (
                        <div key={i} className="flex gap-2 text-sm">
                            <span className="w-36 shrink-0 font-mono text-fg/50">
                                {item.label}
                            </span>
                            <span className="text-fg">
                                {item.links.slice(0, 1).map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </span>
                        </div>
                    ))}
                    <div className="pt-2">
                        <ArrowLink href="/config">everything I use</ArrowLink>
                    </div>
                </div>
            </Section>

            {/* Experience */}
            <Section title="Experience">
                <div className="space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                        <div>
                            <p className="font-medium text-fg">
                                Technical Content Creator ·{" "}
                                <a
                                    href="https://www.youtube.com/@unixphile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    YouTube
                                </a>{" "}
                                /{" "}
                                <a
                                    href="https://dev.to/chamal1120"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Dev.to
                                </a>
                            </p>
                            <p className="text-sm text-fg/60">
                                Talks and writes about Linux, open source and
                                CLI workflows.
                            </p>
                        </div>
                        <span className="shrink-0 font-mono text-sm text-fg/50">
                            May 2024 — now
                        </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                        <div>
                            <p className="font-medium text-fg">
                                Engineering Intern ·{" "}
                                <a
                                    href="https://wso2.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    WSO2
                                </a>
                            </p>
                            <p className="text-sm text-fg/60">
                                Designed, built and delivered agentic
                                automations to the internal patching team.
                            </p>
                        </div>
                        <span className="shrink-0 font-mono text-sm text-fg/50">
                            Feb — Aug 2026
                        </span>
                    </div>
                    <div className="pt-1">
                        <ArrowLink href="/experience">full history</ArrowLink>
                    </div>
                </div>
            </Section>

            {/* Learnings (Education) */}
            <Section title="Learning">
                <div className="space-y-3">
                    <div>
                        <p className="font-medium text-fg">
                            BSc. (Hons) in Software Engineering
                        </p>
                        <p className="font-mono text-sm text-fg/60">
                            SLTC Research University · 2022 — 2026
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-fg">
                            CS50x: Introduction to Computer Science
                        </p>
                        <p className="font-mono text-sm text-fg/60">
                            Harvard OpenCourseWare · 2024 — 2025
                        </p>
                    </div>
                    <div className="pt-1">
                        <ArrowLink href="/education">full history</ArrowLink>
                    </div>
                </div>
            </Section>

            {/* GitHub Activity */}
            <Section title="GitHub Activity">
                <div className="flex flex-col items-stretch gap-4">
                    <a
                        href="https://github.com/Chamal1120/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex overflow-hidden rounded-lg border border-bg/50 bg-bg/50 p-3"
                    >
                        <Image
                            src={contributionGraphUrl}
                            alt="Chamal1120 GitHub contribution graph"
                            className="w-full"
                            width={800}
                            height={146}
                            loading="lazy"
                            unoptimized
                        />
                    </a>
                </div>
            </Section>

            {/* Footer */}
            <footer className="mt-8 flex flex-col items-center gap-4 border-t border-dotted border-fg/20 pt-8 text-center text-sm text-fg/40">
                built with Next.js · inspired by isala.me
            </footer>
        </div>
    )
}
