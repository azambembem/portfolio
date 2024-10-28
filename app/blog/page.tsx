// app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  const categories = ["tech", "lifestyle", "travel"];

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-semibold text-blue-600 mb-4 text-center">
          Blog Categories
        </h1>
        <ul className="space-y-2 text-center">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog/${category}`}
                className="text-lg text-blue-500 hover:underline"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
