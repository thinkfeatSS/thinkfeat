"use client";
import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const AnimatPrimarybtn = ({ text, onClick } : ButtonProps) => {
  return (
    // <button
    //   onClick={onClick}
    //   className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    // >
    //   {text}
    // </button>
    // <button className='btn-primary before:ease relative overflow-hidden bg-primary text-on-primary shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 hover:shadow-gray-800 hover:before:-translate-x-40 '
    <button className='bg-primary text-on-primary py-2.5 px-6 rounded-full hover:bg-primary-container hover:text-on-primary-container hover:scale-110 transition-all uppercase'
    onClick={onClick}
    >
      {text}  
    </button>
  );
};

export default AnimatPrimarybtn;