interface EducationProps {
  institution: string;
  course: string;
  duration: string;
  link?: string;
}

const EducationCard: React.FC<EducationProps> = ({
  institution,
  course,
  duration,
  link,
}) => {
  return (
    <div className="border-fg/20 flex flex-col gap-0.5 border-b border-dotted py-5 last:border-b-0">
      <span className="text-fg font-medium">{course}</span>
      <span className="text-fg/60">{institution}</span>
      <span className="text-fg/40 font-mono text-sm">{duration}</span>
      {link ? <span className="text-fg/40 text-sm">{link}</span> : null}
    </div>
  );
};

export default EducationCard;
