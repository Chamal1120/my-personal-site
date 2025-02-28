import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex flex-row flex-wrap justify-center gap-4 p-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
