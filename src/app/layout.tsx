import "~/styles/globals.css";
import { Space_Mono } from 'next/font/google';
import Navbar from "~/../src/components/Navbar";
import { type Metadata } from "next";
import Footer from "~/components/Footer";

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Chamal1120",
  description: "This is Chamal's personal site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Root: render the root layout of the page
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
      </head>

      <body className="bg-ctp-base-dark text-ctp-crust-light">
        <div className="flex flex-col z-50 sm:hidden">
          <div>
            <Navbar />
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="flex flex-col h-screen sm:flex-row text-center max-w-screen-xl mx-auto">
          <div className="flex-1 hidden sm:flex flex-col py-10 bg-ctp-lavender-dark/10 m-2 mr-0 border-r-4 border-ctp-pink-light">
            <div className="flex-grow flex flex-col">
              <Navbar />
            </div>
            <div>
              <Footer />
            </div>
          </div>
          <main className="flex flex-grow flex-col flex-6 overflow-y-auto m-2 bg-ctp-lavender-dark/5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
