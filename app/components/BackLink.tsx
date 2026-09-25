import Link from "next/link"

interface BackLinkProps {
    href?: string
    children?: React.ReactNode
    className?: string
}

export default function BackLink({
    href = "/",
    children = "back to home",
    className = "",
}: BackLinkProps) {
    return (
        <Link href={href} className="inline-block">
            <span
                className={`group mb-6 inline-flex items-center text-sm text-fg/70 transition-colors duration-300 hover:text-yellow ${className}`}
            >
                <span className="mr-0.5 inline-block h-3 w-3 transition-all duration-300 ease-in-out group-hover:-translate-x-[2px] group-hover:translate-y-[2px]">
                    <svg
                        viewBox="0 0 24 24"
                        className="arrow-icon h-full w-full text-yellow"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 6L6 18M6 18H14M6 18V10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span className="group-hover:underline">{children}</span>
            </span>
        </Link>
    )
}
