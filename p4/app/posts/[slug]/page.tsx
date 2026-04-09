import AddPost from "@/app/components/AddPost";
import React from "react";

const Post = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { slug } = await params;
  const search = await searchParams;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const post = await response.json();
  return (
    <div className="m-2 p-2 flex items-center justify-between gap-2 border border-gray-300 rounded">
      <div>{post.title}</div>
      <AddPost />
    </div>
  );
};

export default Post;
