 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./../public/hero/hero.png"; // Update this path if needed

export default function Hero2() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-on-surface-color overflow-hidden ">

      <div className="container mx-auto  px-28 flex flex-col md:flex-row items-center gap-6">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl font-bold text-gray-900"
          >
            Let&apos;s Learn to build a <span className="text-secondary">Website</span> for your business
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link 
              href="/get-started"
              className="inline-block mt-6 px-6 py-3 bg-secondary text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Get Started →
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image 
              src={heroImg} 
              alt="Hero Image" 
              width={300} 
              height={400} 
              className="rounded-lg h-[300px] w-[350px]"
              priority
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
