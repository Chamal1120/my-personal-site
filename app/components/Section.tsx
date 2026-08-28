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
    {children}
  </section>
);

export default Section;
