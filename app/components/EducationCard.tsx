interface EducationProps {
    institution: string
    course: string
    duration: string
    link?: string
}

export default function EducationCard({
    institution,
    course,
    duration,
    link,
}: EducationProps) {
    return (
        <div className="flex flex-col gap-0.5 border-b border-dotted border-fg/20 py-5 last:border-b-0">
            <span className="font-medium text-fg">{course}</span>
            <span className="text-fg/60">{institution}</span>
            <span className="font-mono text-sm text-fg/40">{duration}</span>
            {link ?
                <span className="text-sm text-fg/40">{link}</span>
            :   null}
        </div>
    )
}
