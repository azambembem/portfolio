// app/blog/[category]/[id]/page.tsx
export default function PostPage({
  params
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = params;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-600 mb-2">
        Post {id} in {category.toUpperCase()} Category
      </h1>
      <p className="text-gray-700">This is the detailed content of the post.</p>
    </div>
  );
}
