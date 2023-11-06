"use client";

import { NavbarLinks } from "@/constants";
import React from "react";
import LinkScroll from "../LinkScroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end gap-x-12 px-20 py-10">
      {NavbarLinks.map((navbar) => (
        <LinkScroll key={navbar.label} href={navbar.route}>
          <span className="text-xl font-medium">{navbar.label}</span>
        </LinkScroll>
      ))}
    </nav>
  );
};

export default Navbar;
