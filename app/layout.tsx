import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "NEXORIS",
  description: "Where Innovation Meets Scalability",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="nexoris-theme"
        >
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

