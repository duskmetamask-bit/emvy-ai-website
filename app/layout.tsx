import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EMVY — AI Audit Agency",
  description: "We audit, build, and manage AI systems for businesses that want real results — not demos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
