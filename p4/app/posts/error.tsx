"use client";
import React from "react";

const Error: React.FC<{ error: Error }> = ({ error }) => {
  console.error(error);
  return <div>Error: {error?.message}</div>;
};

export default Error;
