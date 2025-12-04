"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Config", path: "/config" },
];

const socials = [
  // { name: "Discord", path: "" },
  { name: "Email", path: "mailto:chamal.randika.mcr@gmail.com" },
  { name: "GitHub", path: "https://github.com/Chamal1120/" },
  { name: "YouTube", path: "https://www.youtube.com/@unixphile" },
];

type NavProps = {
  showNav?: boolean;
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ showNav, setShowNav }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className="sm:mt-0b mt-5 grow items-start justify-between bg-transparent px-8 text-xl sm:flex sm:flex-col">
      <div>
        <Link href="/" className="hidden sm:block">
          <motion.span
            className="text-ctp-yellow hover:text-ctp-lavender relative inline-block pb-1 font-sans text-4xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            Chamal1120
          </motion.span>
        </Link>
        <div className="hidden pt-10 text-lg sm:block sm:text-left">
          {/* <DiscordButton /> */}
          <ul>
            {socials.map((item) => (
              <motion.li
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                }}
              >
                <Link target="_blank" href={item.path} key={item.name}>
                  <div className="group flex flex-row gap-1 pb-2">
                    <p className="group-hover:text-ctp-yellow group-hover:underline">
                      {item.name}
                    </p>
                    <span className="inline-block h-3.5 w-3.5 transition-all duration-300 ease-in-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                      <svg
                        viewBox="0 0 24 24"
                        className="group-hover:text-ctp-yellow h-full w-full translate-y-1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M18 6H10M18 6V14"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex flex-col gap-3 pb-10">
        {navItems.map((item) => (
          <motion.li
            onClick={() => setShowNav?.(!showNav)}
            key={item.path}
            className="text-center font-semibold sm:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <Link className="group" href={item.path}>
              <span
                className={`relative hidden h-6 w-3.5 text-[1.3rem] sm:inline-block ${
                  pathname === item.path
                    ? "text-ctp-yellow"
                    : "text-ctp-lavender"
                }`}
              >
                {/* Slash */}
                <span className="absolute inset-0 z-10 origin-bottom transition-all duration-300 group-hover:rotate-45 group-hover:opacity-0">
                  /
                </span>

                {/* Arrow */}
                <span className="absolute inset-0 z-0 translate-x-0.5 translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <span
                className={` ${pathname == item.path ? "text-ctp-yellow" : ""} text-ctp-lavender" "sm:relative transition-all duration-300 ease-in-out sm:inline-block sm:group-hover:translate-x-2`}
              >
                {item.name}
              </span>
            </Link>
          </motion.li>
        ))}
        <motion.li
          onClick={() => setShowNav?.(!showNav)}
          className="text-center font-semibold sm:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] },
          }}
        >
          <Link href="/" className="group">
            <span
              className={`relative hidden h-6 w-3.5 text-[1.3rem] sm:inline-block ${
                pathname === "/" ? "text-ctp-yellow" : "text-ctp-lavender"
              }`}
            >
              {/* Slash */}
              <span className="absolute inset-0 z-10 origin-bottom transition-all duration-300 group-hover:rotate-45 group-hover:opacity-0">
                /
              </span>

              {/* Arrow */}
              <span className="absolute inset-0 z-0 translate-x-0.5 translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
            <span
              className={`${pathname == "/" ? "text-ctp-yellow" : "text-ctp-lavender"} transition-all duration-300 ease-in-out sm:relative sm:inline-block sm:group-hover:translate-x-2`}
            >
              Home
            </span>
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
