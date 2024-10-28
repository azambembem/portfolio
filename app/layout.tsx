import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        <nav className="p-4 bg-blue-700 text-white flex justify-center space-x-6">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-yellow-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </nav>
        <ErrorBoundary>
          <main className="container mx-auto p-6 flex-grow">{children}</main>
        </ErrorBoundary>
        <footer className="bg-gray-200 text-center text-sm p-4 mt-auto">
          © 2024 Your Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
