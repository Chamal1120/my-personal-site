import { Inter, JetBrains_Mono } from "next/font/google"
import { type Metadata } from "next"
import "./globals.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
    title: "Chamal1120",
    description: "Chamal's personal site",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
}

const themeScript = `
(() => {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
})();
`

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <meta name="darkreader-lock" />
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="bg-bg font-sans text-fg antialiased">
                <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24">
                    {children}
                </main>
            </body>
        </html>
    )
}
