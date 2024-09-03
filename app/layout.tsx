import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Thinkfeat Software Solutions",
  description: "Your Imagination Is Our Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.className}`}>
        <Navbar />
        {/* <div className="hello bg-white w-full h-20 md:bg-blue-500 lg:bg-purple-500 xl:bg-green-500 2sxl:bg-orange-500"></div> */}
        {children}
        </body>
    </html>
  );
}
