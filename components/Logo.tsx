import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-2 md:gap-4'>
      <Image src="/images/thinkfeat icon.png" alt="not found" width={1006} height={1035} className='w-12 md:w-24'/>
      <div className='flex flex-col items-center justify-center'>

      <h1 className='text-2xl md:text-5xl leading-5 tracking-wide font-medium text-on-secondary-container dark:text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary'>THINKFEAT</h1>
      <h1 className='text-[8px] tracking-[0.12rem] md:tracking-[0.25rem] md:text-base font-semibold text-on-secondary-container dark:text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary'>SOFTWARE SOLUTIONS</h1>
      </div>
    </div>
  )
}

export default Logo
