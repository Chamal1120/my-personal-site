'use client';
import Link from "next/link";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Config", path: "/config" },
];

const socials = [
  { name: "Discord", path: "/" },
  { name: "Email", path: "/" },
  { name: "GitHub", path: "/" },
  { name: "YouTube", path: "/" },
];

type NavProps = {
  showNav?: boolean,
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ showNav, setShowNav }: NavProps) => {
  return (
    <nav className="items-start bg-transparent px-8 text-xl sm:flex sm:flex-col flex-grow justify-between mt-5 sm:mt-0b">
      <div>
        <Link href="/" className="hidden sm:block">
          <span className="relative inline-block pb-1 text-4xl font-bold">
            Chamal1120
          </span>
        </Link>
        <div className="sm:text-left pt-10 text-lg lg:block hidden ">
          {socials.map((item) => (
            <Link href={item.path} key={item.name} className="hover:underline">
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <ul className="pb-10 flex flex-col gap-3">
        {navItems.map((item) => (
          <li onClick={() => setShowNav?.(!showNav)} key={item.path} className="sm:text-left text-center font-semibold">
            <Link href={item.path}>
              <span className="relative inline-block">{item.name}</span>
            </Link>
          </li>
        ))}
        <li onClick={() => setShowNav?.(!showNav)} className="sm:text-left text-center font-semibold">
          <Link href="/"><p>Home</p></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
