import * as motion from "motion/react-client";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-12">
    <motion.div
      className="mb-5 flex items-center gap-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-fg text-lg font-medium">{title}</h2>
      <div className="border-fg/20 flex-grow border-b border-dotted" />
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
);

export default Section;
