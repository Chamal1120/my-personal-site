"use client";
import Link from "next/link";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="mx-auto hidden max-w-7xl text-xl items-center justify-between bg-transparent px-8 py-2 sm:flex">
      <Link href="/">
        <span className="relative inline-block pb-1 font-bold">
          Chamal1120
        </span>
      </Link>

      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <span className="relative inline-block pb-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
