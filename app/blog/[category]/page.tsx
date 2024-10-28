// app/blog/[category]/page.tsx
"use client"; // 이 지시어를 추가하여 클라이언트 컴포넌트로 설정

import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
}

export default function CategoryPage({
  params
}: {
  params: { category: string };
}) {
  const { category } = params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        { id: "1", title: "First Post" },
        { id: "2", title: "Second Post" }
      ]);
      setLoading(false);
    }, 1000); // Simulated network delay
  }, []);

  if (loading) {
    return <div className="text-center text-blue-500">Loading posts...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">
        {category.toUpperCase()} Posts
      </h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${category}/${post.id}`}
              className="text-lg text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
