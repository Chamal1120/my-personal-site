import Link from "next/link";
// import Image from "next/image";
import * as motion from "motion/react-client";
import { configData } from "./configData";

// Helper component for rendering links
const LinkItem = ({ text, href }: { text: string; href: string }) => (
  <Link className="group" href={href} target="_blank" rel="noopener noreferrer">
    <span className="group-hover:text-yellow group-hover:underline">
      {text}
    </span>
    <span className="inline-block h-3 w-3 transition-all duration-300 ease-in-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
      <svg
        viewBox="0 0 24 24"
        className="group-hover:text-yellow h-full w-full translate-x-0.5"
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
  </Link>
);

export default function ConfigPage() {
  return (
    <>
      <motion.h2
        className="cursor-default pt-4 pl-4 text-left text-3xl font-bold"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Things I use
      </motion.h2>
      <div className="flex cursor-default flex-row p-4 text-left">
        <div>
          <motion.ul
            className="flex flex-col gap-2"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
            }}
          >
            {configData.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.label} - </span>
                {item.links &&
                  item.links.map((link, linkIndex) => (
                    <span key={linkIndex}>
                      {linkIndex > 0 && <span>, </span>}
                      <LinkItem text={link.text} href={link.href} />
                    </span>
                  ))}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
}
