import * as motion from "motion/react-client"

interface SectionProps {
    title: string
    children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-12">
            <motion.div
                className="mb-5 flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-lg font-medium text-fg">{title}</h2>
                <div className="border-b border-dotted border-fg/20" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    )
}
