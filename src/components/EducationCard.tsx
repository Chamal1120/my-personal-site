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
    <div className="flex flex-col py-6">
      <h3 className="text-start"> {course} </h3>
      <h4 className="text-start"> {institution} </h4>
      <p className="text-start"> {duration} </p>
      {link? <p className="text-start"> {link} </p> : null}
    </div>
  );
};

export default EducationCard;
