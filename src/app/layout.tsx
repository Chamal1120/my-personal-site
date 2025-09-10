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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
      </head>

      <body className="flex min-h-screen flex-col bg-ctp-crust text-center text-ctp-crust-light">
        <div className="relative py-8">
          <Navbar />
        </div>
        <main className="flex flex-grow flex-col items-center justify-center overflow-y-auto pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
