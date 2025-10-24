export const metadata = {
  title: "Fog City Fast Club",
  description: "New track every Friday.",
};

import Link from "next/link";
import "./globals.css"; // import global CSS here (NOT in page.tsx)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex gap-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/subscribe">Subscribe</Link>
            <a href="/admin" rel="nofollow">Admin</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
