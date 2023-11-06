"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkScroll = ({ children, href }: Props) => {
  return (
    <ScrollLink
      className="cursor-pointer"
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {children}
    </ScrollLink>
  );
};

export default LinkScroll;
