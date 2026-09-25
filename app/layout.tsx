import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "inceptus — Growth for India",
  description: "Regional-first digital growth for D2C brands across India.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
