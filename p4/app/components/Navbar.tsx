"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center gap-2">
      <Link
        href="/"
        className={`text-white hover:underline ${pathname === "/" ? "font-bold" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/posts"
        className={`text-white hover:underline ${pathname === "/posts" ? "font-bold" : ""}`}
      >
        Posts
      </Link>
      <Link
        href="/products"
        className={`text-white hover:underline ${pathname === "/products" ? "font-bold" : ""}`}
      >
        Products
      </Link>
      <Link
        href="/comments"
        className={`text-white hover:underline ${pathname === "/comments" ? "font-bold" : ""}`}
      >
        Comments
      </Link>
    </div>
  );
};

export default Navbar;
