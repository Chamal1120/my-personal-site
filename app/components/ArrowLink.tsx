import Link from "next/link"

interface ArrowLinkProps {
    href: string
    children: React.ReactNode
    external?: boolean
    className?: string
}

export default function ArrowLink({
    href,
    children,
    external = false,
    className = "",
}: ArrowLinkProps) {
    const content = (
        <span
            className={`group inline-flex items-center text-sm text-fg/70 transition-colors duration-300 hover:text-yellow ${className}`}
        >
            <span className="group-hover:underline">{children}</span>
            <span className="ml-0.5 inline-block h-3 w-3 transition-all duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                <svg
                    viewBox="0 0 24 24"
                    className="arrow-icon h-full w-full text-yellow"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 18L18 6M18 6H10M18 6V14"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </span>
    )

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
            >
                {content}
            </a>
        )
    }

    return (
        <Link href={href} className="inline-block">
            {content}
        </Link>
    )
}
