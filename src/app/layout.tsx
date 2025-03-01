import type { Metadata } from "next";
import "./globals.css";
import { Bowlby_One_SC ,DM_Mono } from 'next/font/google'

const bowlby = Bowlby_One_SC({
  subsets: ['latin'],
  display: "swap",
  variable:"--font-bowlby-sc",
  weight:"400"

})

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: "swap",
  variable:"--font-dm-mono",
  weight:"500"

})
export const metadata: Metadata = {
  title: "SUBWAY SURFERS",
  description: "HARRY's CREATIONS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        {children}
      </body>
    </html>
  );
}
