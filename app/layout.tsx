import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from '@/app/Provider';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-lightbg text-black dark:bg-darkbg dark:text-white`}>
        <Providers>{children}
          <Navbar />
        </Providers>
        {/* <div className="hello bg-white w-full h-20 md:bg-blue-500 lg:bg-purple-500 xl:bg-green-500 2sxl:bg-orange-500"></div> */}
        {children}
      </body>
    </html>
  );
}
