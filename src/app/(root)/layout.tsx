import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="min-h-screen px-10">{children}</section>
    </main>
  );
};

export default Layout;
