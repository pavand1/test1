"use client";
import { createPost, Errors, formState } from "@/app/actions/post";
import { error } from "console";
import React, { useActionState } from "react";

function NewPost() {
  const initialValues: formState = {
    errors: {},
  };
  const [state, addPost, isPending] = useActionState(createPost, initialValues);
  console.log("Errors:", state.errors);
  return (
    <div className="m-2 p-2 border border-gray-300 rounded">
      <form action={addPost} className="flex flex-col">
        <div className="mb-4  flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className="bg-slate-50 text-black" />
        </div>
        <div className="mb-4  flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <input type="text" name="body" className="bg-slate-50 text-black" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPost;
