// app/not-found.tsx
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 hover:underline mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
}
