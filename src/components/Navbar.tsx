import Link from "next/link";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Config", path: "/config" },
];

const Navbar = () => {
  return (
    <nav className="items-start bg-transparent px-8 text-xl sm:flex sm:flex-col flex-grow justify-between">
      <div>
        <Link href="/">
          <span className="relative inline-block pb-1 text-4xl font-bold">
            Chamal1120
          </span>
        </Link>
        <div className="text-left pt-10 text-lg">
          <Link href="/" className="hover:underline">
            <p>Discord</p>
          </Link>
          <Link href="/" className="hover:underline">
            <p>Email</p>
          </Link>
          <Link href="/" className="hover:underline">
            <p>GitHub</p>
          </Link>
          <Link href="/" className="hover:underline">
            <p>YouTube</p>
          </Link>
        </div>
      </div>

      <ul className="pb-10 flex flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.path} className="text-left font-semibold">
            <Link href={item.path}>
              <span className="relative inline-block">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
