'use client'
import React from 'react'
import { useRouter,usePathname  } from 'next/navigation'
import AnimatPrimarybtn from '@/components/AnimatPrimarybtn';
import Hero from '../Hero';
const page = () => {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName);
  return (
    <div className="relative">
    <div className="sticky top-0 flex flex-col items-center justify-center">
    <Hero />

    </div>
    <div className="sticky top-0 h-[778px] flex flex-col items-center justify-center bg-indigo-600 text-white">
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
    </div>
    <div className="sticky top-0 h-[778px] flex flex-col items-center justify-center bg-purple-600 text-white">
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
    </div>
    <div className="sticky top-0 h-[778px] flex flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 className="text-4xl">The Fourth Title</h2>
    </div>
</div>
  )
}

export default page
