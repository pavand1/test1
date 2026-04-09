"use server";

import { revalidatePath } from "next/cache";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

export type Errors = {
  title?: string;
  body?: string;
};

export type formState = {
  errors: {
    title?: string;
    body?: string;
  };
};

export async function createPost(
  prevState: formState,
  data: FormData,
): Promise<formState> {
  const title = data.get("title")?.toString() || "";
  const body = data.get("body")?.toString() || "";

  const errors: Errors = {};
  if (title.length === 0) {
    errors.title = "Title is required";
  }
  if (body.length === 0) {
    errors.body = "Body is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await fetch(POST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  return { errors };
}
