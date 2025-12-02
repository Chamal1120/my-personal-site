"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
// import DiscordButton from "./DiscordButton";
// import SignInButton from "./SignInButton";

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
    <nav className="sm:mt-0b mt-5 flex-grow items-start justify-between bg-transparent px-8 text-xl sm:flex sm:flex-col">
      <div>
        <Link href="/" className="hidden sm:block">
          <motion.span
            className="relative inline-block pb-1 font-sans text-4xl font-bold text-ctp-yellow-dark"
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
        <div className="hidden pt-10 text-lg sm:text-left lg:block">
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
                  <p className="hover:text-ctp-yellow-dark hover:underline">
                    {item.name}
                  </p>
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
            <Link href={item.path}>
              <span
                className={` ${pathname == item.path ? "text-ctp-yellow-dark" : ""} text-ctp-surface1-light" "relative inline-block hover:text-ctp-crust-light`}
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
          <Link href="/">
            <p
              className={
                pathname == "/"
                  ? "text-ctp-yellow-dark"
                  : "text-ctp-lavender-dark"
              }
            >
              Home
            </p>
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
