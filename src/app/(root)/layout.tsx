import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-neutral-white">
      <Navbar />
      <section className="min-h-screen">{children}</section>
    </main>
  );
};

export default Layout;
