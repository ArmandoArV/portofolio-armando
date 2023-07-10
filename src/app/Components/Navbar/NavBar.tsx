"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navBarElements, NavBarElement } from "@/app/Constants";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white flex flex-row justify-end items-center px-20 h-16 w-full fixed top-0 left-0 z-10">
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:flex-row sm:justify-between sm:items-center flex-col items-start list-none mx-auto p-0`}
      >
        {Object.entries(navBarElements).map(
          ([key, element]: [string, NavBarElement]) => (
            <li className="my-2" key={key}>
              <Link
                href={element.ref}
                className="inline-block text-white no-underline text-base tracking-wider uppercase relative transition-all duration-400 ease-in-out px-4 py-2 mx-2 hover:text-pink-400"
              >
                {key}
              </Link>
            </li>
          )
        )}
      </ul>
      <button
        className="block sm:hidden text-white focus:outline-none ml-auto"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16v2H4V5zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
