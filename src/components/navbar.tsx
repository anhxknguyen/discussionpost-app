import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between h-full mx-10">
      <section className="flex gap-4 items-center h-full">
        <Link
          className="bg-blue-500 hover:bg-blue-800 rounded-md text-white py-2 px-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-blue-500 hover:bg-blue-800 rounded-md text-white py-2 px-4"
          href="/discussions"
        >
          Discussions
        </Link>
      </section>
      <section className="flex items-center">
        <Link
          className="bg-blue-500 hover:bg-blue-800 rounded-md text-white py-2 px-4"
          href="/post"
        >
          New Post
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
