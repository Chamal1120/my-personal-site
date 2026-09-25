import * as motion from "motion/react-client"
import { configData } from "./configData"
import BackLink from "../components/BackLink"

export default function ConfigPage() {
    return (
        <>
            <BackLink />
            <motion.h1
                className="mb-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
                }}
            >
                Things I use
            </motion.h1>
            <motion.p
                className="mb-8 text-lg font-medium text-fg/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.08,
                        duration: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    },
                }}
            >
                My current setup.
            </motion.p>
            <motion.ul
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.12,
                        duration: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    },
                }}
            >
                {configData.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                        <span className="w-40 shrink-0 font-mono text-fg/50">
                            {item.label}
                        </span>
                        <span className="text-fg">
                            {item.links.map((link, linkIndex) => (
                                <span key={linkIndex}>
                                    {linkIndex > 0 && (
                                        <span className="text-fg/40">, </span>
                                    )}
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors hover:text-yellow hover:underline"
                                    >
                                        {link.text}
                                    </a>
                                </span>
                            ))}
                        </span>
                    </li>
                ))}
            </motion.ul>
        </>
    )
}
