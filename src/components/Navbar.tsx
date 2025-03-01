"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
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
        className={`flex flex-row flex-wrap items-center justify-center gap-10 py-4 px-16 backdrop-blur-md ${isScrolled ? "border border-ctp-crust-light/20 bg-ctp-crust-dark/60 backdrop-blur-md" : "bg-transparent"} `}
      >
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:underline">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:underline">
          <Link href="/education">Education</Link>
        </li>
        <li className="hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
