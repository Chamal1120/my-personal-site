"use client";
import { useState } from "react";
import Footer from "~/components/Footer";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import HamburgerButton from "~/components/HamburgerButton";

export default function MobileView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false); 
  return (
    <>
      <div className="flex h-screen flex-col sm:hidden overflow-hidden">
          <div className="flex flex-row justify-between p-2">
            <div className="">
            <Link href="/">
              <p className="text-2xl font-bold">Chamal1120</p>
            </Link>
            </div>
            <div className="">
            <HamburgerButton showNav={showNav} setShowNav={setShowNav}/>
            </div>
          </div>
        <div className="flex flex-grow overflow-y-auto flex-col items-center justify-center">
          <main className="m-2 flex-grow overflow-y-auto bg-ctp-base-dark">
            {children}
          </main>
          <Footer />
        </div>
        <div className={`pb-2 transition-all duration-500 ease-in-out ${showNav ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 overflow-hidden"}`} style={{height: !showNav ? "0rem": "12rem"}}>
          <Navbar showNav={showNav} setShowNav={setShowNav}/>
        </div>
      </div>
    </>
  );
}
