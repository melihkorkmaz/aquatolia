import React from "react";
import "./output.css";
import { Inter } from 'next/font/google';
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {

  return (
    <html lang={params.lang} className={inter.className}>
      <head>
        <title>Aquatolia Store</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
