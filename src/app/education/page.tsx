import EducationCard from "~/components/EducationCard"; // Import EducationCard

const EducationPage = () => {

  // List of educationInfo
  const education = [
    {
      institution: "SLTC Research University",
      course: "BSc. (Hons) in Software Engineering",
      duration: "[2022 - 2026] 4 Years",
    },
    {
      institution: "Harvard OpenCourseWare",
      course: "CS50: Harvard's Introduction to Computer Science",
      duration: "[2024 - 2025] Self Paced",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl py-10">Things I&apos;ve learned.</h2>
      {education.map((educationItem, index) => (
        <EducationCard key={index} {...educationItem} />
      ))}
    </section>
  );
};

export default EducationPage;
