"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2">
      <ul
        className={`flex flex-row flex-wrap items-center justify-center gap-10 px-16 py-4 backdrop-blur-md ${isScrolled ? "border border-ctp-crust-light/20 bg-ctp-crust-dark/70 backdrop-blur-md" : "bg-transparent"} `}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>

              <span className="relative inline-block pb-2">
              {item.name}

                {/* Underline only under the text */}
                <span
                  className={`absolute bottom-0 left-0 h-[0.1rem] bg-ctp-lavender-dark transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    pathname === item.path ? "w-full" : "w-0"
                  }`}
                ></span>

              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
