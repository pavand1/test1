"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddPost = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="p-2 border border-gray-300 rounded cursor-pointer"
        onClick={() => router.push("/posts/new")}
      >
        AddPost
      </div>
    </>
  );
};

export default AddPost;
