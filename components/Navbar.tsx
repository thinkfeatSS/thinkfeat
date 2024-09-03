'use client';
import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSortDown } from "react-icons/fa";
import AnimatPrimarybtn from './AnimatPrimarybtn';
import NavLinks from '@/app/NavLinks';
import { BsMenuButtonWideFill } from "react-icons/bs"
import { RiCloseLargeFill } from "react-icons/ri";
const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathName = usePathname();
  const navLinks = [
    { title: 'Home', url: '/' },
    {
      title: 'Services', url: '/services', dropdown: [
        { title: 'Service', url: '/services/ai' },
        { title: 'Service', url: '/services/ml' },
        { title: 'Service', url: '/services/ds' },
      ]
    },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Happy Testing', url: '/happytesting' },
  ];

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    const mouseEvent = event as unknown as ReactMouseEvent;

    if (
      dropdownOpen !== null &&
      dropdownRefs.current[dropdownOpen] &&
      !dropdownRefs.current[dropdownOpen]!.contains(mouseEvent.target as Node)
    ) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dropdownOpen]);

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    },
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 150, damping: 20 }
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { type: 'spring', stiffness: 200, damping: 25 }
    }
  };

  return (
    <>
    <nav className="z-[499] fixed top-0 left-0 flex items-center justify-center w-screen text-primary shadow-md backdrop-blur-lg px-4 md:px-8">
 <div className='flex items-center justify-between w-full xl:w-[1296px]'>
  
        <Image src="/images/thinkfeat logo.png" alt="logo" width={302} height={100} className='w-[151px] h-[50px] md:w-[302px] md:h-[100px]' />
        {mobileMenuOpen ? <RiCloseLargeFill className="lg:hidden w-8 h-8 text-primary" onClick={toggleMobileMenu} />:<BsMenuButtonWideFill className="lg:hidden w-8 h-8 text-primary" onClick={toggleMobileMenu} />}
        <div className='hidden lg:flex'>

          <NavLinks navLinks={navLinks} />
        </div>
        <div className='hidden xl:block'>
          <AnimatPrimarybtn text="Share Your Idea" onClick={() => console.log("button click")} />
      </div>



 </div>
    </nav>
      <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      className="z-[999] fixed left-[4.5%] top-16 w-11/12 bg-primary text-on-primary shadow-lg rounded-lg lg:hidden z-50 flex flex-col gap-2 p-4 bg-opacity-80 backdrop-blur-md"
      initial="closed"
      animate="open"
      exit="closed"
      variants={mobileMenuVariants}
    >
      {navLinks.map((link, index) => (
        <div key={index}>
          {link.dropdown ? (
            <>
              <button
                onClick={() => toggleDropdown(index)}
                className="text-lg md:text-xl group transition-all ease-linear w-full flex gap-1"
              >
                {link.title}
                <FaSortDown />
                {pathName === link.url && (
                  <motion.div
                    className="relative w-full h-0.5"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    exit={{ width: '0%' }}
                    transition={{ duration: 0.3, ease: 'linear' }}
                  >
                    <motion.span
                      className="absolute left-0 top-0 h-full bg-secondary"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: 'linear' }}
                    />
                  </motion.div>
                )}
              </button>
              <AnimatePresence>
                {dropdownOpen === index && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    {link.dropdown.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.url}
                        className="block pl-4 py-2 text-base md:text-lg text-on-primary"
                        onClick={toggleMobileMenu} // Close menu on click
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={link.url}
              className="text-lg md:text-xl group transition-all ease-linear"
              onClick={toggleMobileMenu} // Close menu on click
            >
              {link.title}
              {pathName === link.url && (
                <motion.div
                  className="relative w-full h-0.5"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  exit={{ width: '0%' }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                >
                  <motion.span
                    className="absolute h-full bg-secondary transition-all ease-linear"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: 'linear' }}
                  />
                </motion.div>
              )}
            </Link>
          )}
        </div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

</>
  );
};

export default Navbar;
