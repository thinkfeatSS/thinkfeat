'use client';

import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="">
      <button
        onClick={handleToggle}
        className="p-2 rounded-full transition-colors duration-300"
      >
        {theme === 'dark' ? <MdLightMode className='nav-icon'/> : <MdDarkMode className='nav-icon' />}
      </button>
    </div>
  );
};

export default DarkMode;
