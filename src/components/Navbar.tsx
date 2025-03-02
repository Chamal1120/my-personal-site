"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import * as motion from "motion/react-client";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getUnderlineProps = () => {
    const selectedIndex = navItems.findIndex((item) => item.path === pathname);
    const selectedElement = navRefs.current[selectedIndex];
    if (selectedElement) {
      const { offsetLeft, offsetWidth } = selectedElement;
      return { x: offsetLeft, width: offsetWidth };
    }
    return { x: 0, width: 0 };
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 hidden -translate-x-1/2 pt-5 lg:flex">
      <div
        className={`py-2 transition-[background-color] duration-200 lg:px-8 xl:px-16 ${
          isScrolled
            ? "border border-ctp-crust-light/20 bg-ctp-crust-dark/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <ul className="relative hidden flex-wrap items-center justify-center bg-transparent py-1 lg:flex lg:flex-row lg:gap-8 xl:gap-12">
          {navItems.map((item, index) => (
            <li
              key={item.path}
              ref={(el) => {
                navRefs.current[index] = el;
              }}
            >
              <Link href={item.path}>
                <span className="relative inline-block pb-1">{item.name}</span>
              </Link>
            </li>
          ))}
          <motion.span
            className="absolute bottom-0 left-0 h-[0.1rem] bg-ctp-lavender-dark"
            animate={getUnderlineProps()}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
