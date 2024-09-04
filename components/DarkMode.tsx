'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoids server-side mismatch issues
  }

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="">
      <button
        onClick={handleToggle}
        className="p-2 rounded-full transition-colors duration-300"
      >
        {theme === 'dark' ? <MdLightMode className='text-on-surface-color'/> : <MdDarkMode className='text-surface-color' />}
      </button>
    </div>
  );
};

export default DarkMode;
