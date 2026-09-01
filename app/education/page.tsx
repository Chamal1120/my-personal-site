import * as motion from "motion/react-client";
import EducationCard from "../components/EducationCard";
import BackLink from "../components/BackLink";

const EducationPage = () => {
  // List of educationInfo
  const education = [
    {
      institution: "SLTC Research University",
      course: "BSc. (Hons) in Software Engineering",
      duration: "2022 — 2026 · 4 Years",
    },
    {
      institution: "Harvard OpenCourseWare",
      course: "CS50x: Harvard's Introduction to Computer Science",
      duration: "2024 — 2025 · Self Paced",
    },
    {
      institution: "Maliyadeva College, Kurunegala",
      course: "GCE A/L, Commerce Stream (English Medium)",
      duration: "Aug 2016 — Aug 2018",
    },
    {
      institution: "Lakdas De Mel College, Kurunegala",
      course: "Grade 1 to GCE O/L",
      duration: "Jan 2005 — Dec 2015",
    },
  ];

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
        Things I&apos;ve learned
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
        Formal and self-paced learning.
      </motion.p>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.12, duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        {education.map((educationItem, index) => (
          <EducationCard key={index} {...educationItem} />
        ))}
      </motion.div>
    </section>
  );
};

export default EducationPage;
