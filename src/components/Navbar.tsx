"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"
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
          <span className="relative inline-block pb-1 text-4xl font-bold font-sans text-ctp-yellow-dark">
            Chamal1120
          </span>
        </Link>
        <div className="hidden pt-10 text-lg sm:text-left lg:block">
          {/* <DiscordButton /> */}
          {socials.map((item) => (
            <Link target="_blank" href={item.path} key={item.name}>
              <p className="hover:underline hover:text-ctp-yellow-dark">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <ul className="flex flex-col gap-3 pb-10">
        {navItems.map((item) => (
          <li
            onClick={() => setShowNav?.(!showNav)}
            key={item.path}
            className="text-center font-semibold sm:text-left"
          >
            <Link href={item.path}>
              <span className={` ${pathname == item.path? "text-ctp-yellow-dark" : ""} text-ctp-surface1-light" "relative inline-block hover:text-ctp-crust-light`}>{item.name}</span>
            </Link>
          </li>
        ))}
        <li
          onClick={() => setShowNav?.(!showNav)}
          className="text-center font-semibold sm:text-left"
        >
          <Link href="/">
            <p className={pathname == "/"? "text-ctp-yellow-dark" : "text-ctp-lavender-dark"}>Home</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
