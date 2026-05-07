import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://emvyai.com"),
  title: "EMVY — AI Consultancy",
  description: "Perth based, Australia wide AI consultancy. AI strategy, process automation, custom AI solutions and data analytics for SMBs ready to work smarter.",
  openGraph: {
    title: "EMVYAI — AI Consultancy",
    description: "AI strategy, audits, and automation systems for businesses ready to work smarter.",
    url: "https://emvyai.com",
    siteName: "EMVYAI",
    type: "website",
  },
  icons: {
    icon: "/assets/emvyai-favicon-512.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
