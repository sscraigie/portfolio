import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex  w-full justify-between shadow">
      <Link href="/" className="no-underline">
        <h1 className="m-0 p-3 px-10 font-sans text-2xl font-bold text-blue-600 no-underline md:text-3xl">
          Daily Dev
        </h1>
      </Link>

      <Link
        href="/portfolio"
        className="m-0 h-full px-10 pt-5 align-text-bottom font-sans text-sm text-gray-600 no-underline md:text-base"
      >
        Portfolio
      </Link>
    </nav>
  );
};
