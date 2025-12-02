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
      <div className="flex h-[100dvh] flex-col overflow-hidden sm:hidden">
        <div className="flex flex-row justify-between p-2">
          <div className="">
            <Link href="/">
              <p className="font-sans text-2xl font-bold text-ctp-yellow">
                Chamal1120
              </p>
            </Link>
          </div>
          <div>
            <HamburgerButton showNav={showNav} setShowNav={setShowNav} />
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center overflow-y-auto">
          <main className="m-2 flex-grow overflow-y-auto bg-ctp-base-dark">
            {children}
          </main>
          <Footer />
        </div>
        <div
          className={`pb-2 transition-all duration-500 ease-in-out ${showNav ? "translate-y-0 opacity-100" : "translate-y-full overflow-hidden opacity-0"}`}
          style={{ height: !showNav ? "0rem" : "12rem" }}
        >
          <Navbar showNav={showNav} setShowNav={setShowNav} />
        </div>
      </div>
    </>
  );
}
