"use client";
import Link from "next/link";
import DiscordButton from "./DiscordButton";

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
  return (
    <nav className="sm:mt-0b mt-5 flex-grow items-start justify-between bg-transparent px-8 text-xl sm:flex sm:flex-col">
      <div>
        <Link href="/" className="hidden sm:block">
          <span className="relative inline-block pb-1 text-4xl font-bold">
            Chamal1120
          </span>
        </Link>
        <div className="hidden pt-10 text-lg sm:text-left lg:block">
          <DiscordButton />
          {socials.map((item) => (
            <Link target="_blank" href={item.path} key={item.name}>
              <p className="hover:underline">{item.name}</p>
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
              <span className="relative inline-block">{item.name}</span>
            </Link>
          </li>
        ))}
        <li
          onClick={() => setShowNav?.(!showNav)}
          className="text-center font-semibold sm:text-left"
        >
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
