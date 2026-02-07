import { Space_Grotesk, Space_Mono } from "next/font/google";
import { type Metadata } from "next";
import * as motion from "motion/react-client";
import Footer from ".//components/Footer";
import MobileView from "./mobileView";
import Navbar from "./components/Navbar";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Chamal1120",
  description: "This is Chamal's personal site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${spaceGrotesk.variable}`}
    >
      <head></head>
      <body className="bg-bg font-grotesk text-magenta sm:overflow-hidden">
        <MobileView>{children}</MobileView>
        <div className="mx-auto hidden h-dvh max-w-screen-2xl flex-col text-center sm:flex sm:flex-row">
          <motion.div
            className="border-yellow bg-bg m-2 mr-0 hidden flex-col border-r-2 py-10 sm:flex"
            initial={{ borderColor: "rgba(249, 226, 175, 0)" }}
            animate={{ borderColor: "rgba(249, 226, 175, 1)" }}
            transition={{ duration: 2 }}
          >
            <div className="flex grow flex-col">
              <Navbar />
            </div>
            <div>
              <Footer />
            </div>
          </motion.div>
          <main className="bg-bg m-2 flex flex-1 grow flex-col overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
