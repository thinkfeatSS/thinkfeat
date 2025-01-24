import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-2 '>
      <Image src="/images/thinkfeat icon.png" alt="not found" width={900} height={900} className='w-12 md:w-[70px]'/>


      <div className='flex flex-col  justify-center'>

      <h1 className='md:text-[17px] leading-5 tracking-wide font-medium text-on-secondary-container dark:text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary'>THINKFEAT</h1>

      <h1 className='text-[17px] font-medium  text-on-secondary-container dark:text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary'>SOFTWARE SOLUTIONS</h1>
      </div>
    </div>
  )
}

export default Logo
