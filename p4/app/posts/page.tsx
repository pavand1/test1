import Link from "next/link";
import React from "react";

const page: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="flex flex-col gap-4 mx-1">
      {posts.map((post: any) => (
        <div key={post.id} className="border border-gray-300 p-2 rounded">
          <Link
            href={`/posts/${post.id}`}
            className="text-blue-500 hover:underline"
          >
            {post.title}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default page;
