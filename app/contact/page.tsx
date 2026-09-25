import * as motion from "motion/react-client"
import ArrowLink from "../components/ArrowLink"
import BackLink from "../components/BackLink"

export default function ContactPage() {
    return (
        <section>
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
                Reach me
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
                Open to collaborations and interesting problems.
            </motion.p>
            <motion.div
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
                <ArrowLink href="mailto:chamal.randika.mcr@gmail.com" external>
                    Email · chamal.randika.mcr@gmail.com
                </ArrowLink>
                <ArrowLink href="https://github.com/Chamal1120/" external>
                    GitHub · Chamal1120
                </ArrowLink>
                <ArrowLink href="https://www.youtube.com/@unixphile" external>
                    YouTube · unixphile
                </ArrowLink>
            </motion.div>
        </section>
    )
}
