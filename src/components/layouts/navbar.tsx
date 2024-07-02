"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={"/"}
            className="-m-1.5 p-1.5 text-4xl font-semibold leading-6 text-gray-900"
          >
            S<span className="text-blue-500">M</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-blue-500" : "text-gray-900"
            } text-lg font-semibold leading-6 `}
          >
            Home
          </Link>
          <Link
            href={"/service"}
            className={`${
              path === "/service" ? "text-blue-500" : "text-gray-900"
            } text-lg font-semibold leading-6 `}
          >
            Projects
          </Link>
          <Link
            href={"/gitlab"}
            className={`${
              path === "/gitlab" ? "text-blue-500" : "text-gray-900"
            } text-lg font-semibold leading-6 `}
          >
            GitLab Activity
          </Link>
          <Link
            href={"/about"}
            className={`${
              path === "/about" ? "text-blue-500" : "text-gray-900"
            } text-lg font-semibold leading-6 `}
          >
            About Me
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={"https://t.me/sivkongmeng"}
            target="_blank"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Hire me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
