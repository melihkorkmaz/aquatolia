import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { twJoin } from "tailwind-merge";

interface LayoutProps {
  children: React.ReactNode
  bgColor?: "white" | "gray"
}

export default function Layout({
  children,
  bgColor = "white",
}: LayoutProps) {

  return (
    <>
      <Header />
      <div className={twJoin("w-full overflow-x-hidden", bgColor === "white" ? "bg-white" : "bg-[#f8f8f8]")}>
        <div className="w-full pt-[30px] pb-[60px]">
          <div className="container-x mx-auto">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
