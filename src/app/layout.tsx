import "~/styles/globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Navbar from "~/../src/components/Navbar";
import { type Metadata } from "next";
import Footer from "~/components/Footer";
import ScrollProgress from "~/components/ScrollProgress";
import MobileView from "./mobileView";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
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
      <body className="bg-ctp-mantle-dark text-ctp-crust-light sm:overflow-hidden">
        <MobileView>{children}</MobileView>
        <div className="mx-auto hidden h-screen max-w-screen-xl flex-col text-center sm:flex sm:flex-row">
          <div className="w-128 m-2 mr-0 hidden flex-col border-r-4 border-ctp-lavender-dark bg-ctp-base-dark py-10 sm:flex">
            <div className="flex flex-grow flex-col">
              <Navbar />
            </div>
            <div>
              <Footer />
            </div>
          </div>
          <main className="m-2 flex flex-1 flex-grow flex-col overflow-y-auto bg-ctp-base-dark">
            {children}
          </main>
          <div className="mr-2 flex h-full w-2 flex-col justify-end bg-transparent">
            <ScrollProgress />
          </div>
        </div>
      </body>
    </html>
  );
}
