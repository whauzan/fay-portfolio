import { NavbarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end gap-x-12 px-20 py-10">
      {NavbarLinks.map((navbar) => (
        <Link key={navbar.label} href={navbar.route}>
          <span className="text-xl font-medium">{navbar.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
