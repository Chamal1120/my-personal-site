import "~/styles/globals.css";
import Navbar from "~/app/components/Navbar";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "My Personal Site",
  description: "This is my personal site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black">
        <Navbar/>
        {children}</body>
    </html>
  );
}
