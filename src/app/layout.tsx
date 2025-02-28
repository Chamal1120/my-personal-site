import "~/styles/globals.css";
import Navbar from "~/../src/components/Navbar";

// import { GeistSans } from "geist/font/sans";
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=source-code-pro:200,200i,300,300i,400,500,600,600i,900"
          rel="stylesheet"
        />
      </head>
      <body className="font-source-code-pro min-h-screen flex flex-col bg-ctp-crust text-center text-ctp-crust-light">
        <div className="relative py-8">
          <Navbar />
        </div>
        <main className="flex flex-grow flex-col items-center justify-center overflow-y-auto pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
