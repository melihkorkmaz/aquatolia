import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({
  children,
}: LayoutProps) {

  return (
    <>
      <Header />
      <div className="w-full overflow-x-hidden">
        <div className="w-full">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
