"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../app/images/logo.svg";
import iconMenu from "../app/images/icon-menu.svg";
import iconMenuClose from "../app/images/icon-menu-close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const NavLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "New",
      link: "#new",
    },
    {
      name: "Popular",
      link: "#popular",
    },

    {
      name: "Trending",
      link: "#trending",
    },
    {
      name: "Categories",
      link: "#categories",
    },
  ];

  return (
    <nav className="container  pt-3 relative">
      <div className="flex justify-between items-center   ">
        <div>
          <Image priority src={logo} alt="Logo" />
        </div>
        <div className="z-20">
          <div className="md:hidden">
            {open ? (
              <Image
                onClick={() => setOpen(false)}
                priority
                src={iconMenu}
                alt="Menu Icon"
              />
            ) : (
              <Image
                onClick={() => setOpen(true)}
                priority
                src={iconMenuClose}
                alt="Menu CVlose Icon"
              />
            )}
          </div>
          <div className="hidden md:block ">
            <ul className="flex space-x-10">
              {NavLinks.map((links, index) => (
                <li
                  href={links.link}
                  className="hover:text-[#F15E50] cursor-pointer"
                  key={index}
                >
                  {links.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:block md:hidden">
        <div
          className={`${
            open
              ? "hidden "
              : "z-10  absolute top-0 right-[-20px] min-h-screen w-8/12 bg-white shadow-2xl "
          }`}
        >
          <ul className="flex flex-col justify-end pt-20 pl-5 space-y-3 sm:block">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
