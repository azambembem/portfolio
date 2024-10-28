// app/about/page.tsx
// import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      {/* <Head>
        <title>About Us - Our Blog</title>
        <meta
          name="description"
          content="Learn more about our blog and our team."
        />
      </Head> */}
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-600">
            About Our Blog
          </h1>
          <p className="text-gray-700 mt-4">
            Welcome to our blog. Here you'll find insightful articles and
            updates about our team and mission.
          </p>
        </div>
      </div>
    </>
  );
}
