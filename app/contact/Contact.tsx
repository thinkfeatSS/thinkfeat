"use client";

//import { assets, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
  
    const form = event.currentTarget; // Use currentTarget for better type safety
    const formData = new FormData(form);
  
    formData.append("access_key", "b4f0bc4d-dcc2-49da-8bad-73f020df2f27");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset(); // Reset the form
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  


  return (
    <div id='contact' className='w-full px-[12%] py-10 bg-bg-footer bg-no-repeat bg-center bg-[length:90%_auto]'>
     
      <h2 className='text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12 dark:text-white'>
        Get In Touch
      </h2>
      <p className='text-center text-black max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white'>
        Let’s connect and discuss how we can work together or help you achieve your goals. Drop us a message, and we’ll get back to you as soon as possible!
      </p>


      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='enter your name ' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />

          <input type="email" placeholder='enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
        </div>

        <textarea rows={6} id="" placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>


        <button type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r bg-secondary text-white rounded-full mx-auto 
            hover:bg-primary hover:text-black border border-[#8C6239] duration-500 dark:bg-primary dark:text-black'>
          Submit now  
        </button>
        <p className='mt-4'>{result}</p>
      </form>




      {/* <ul className='flex items-center justify-center mt-32 gap-3 sm:gap-5'>
        {toolsData.map((tool, index) => (
          <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 durataion-500' key={index}>
            <Image src={tool} alt='tool' className='w-5 sm:w-7' />
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Contact