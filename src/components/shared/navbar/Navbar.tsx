"use client";

import { NavbarLinks } from "@/constants";
import React, { FC } from "react";
import LinkScroll from "../LinkScroll";

const Navbar: FC = () => {
  return (
    <nav className="absolute z-10 flex w-full items-center justify-end gap-x-12 px-20 py-10">
      {NavbarLinks.map((navbar) => (
        <LinkScroll key={navbar.label} href={navbar.route}>
          <span className="text-xl font-medium">{navbar.label}</span>
        </LinkScroll>
      ))}
    </nav>
  );
};

export default Navbar;
