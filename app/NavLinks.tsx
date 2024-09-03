'use client';

import { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { FaSortDown } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
    title: string;
    url: string;
    dropdown?: { title: string; url: string }[];
}

interface NavLinksProps {
    navLinks: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ navLinks }) => {
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
    const pathName = usePathname();

    const toggleDropdown = (index: number) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const dropdownVariants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        },
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
    };

    const handleClickOutside = (event: MouseEvent) => {
        const mouseEvent = event as unknown as ReactMouseEvent<Element, MouseEvent>;

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

    return (
        <div className="flex gap-4">
            {navLinks.map((link, index) => (
                <div
                    key={index}
                    ref={(el) => { dropdownRefs.current[index] = el; }}
                    className="relative"
                >
                    {link.dropdown ? (
                        <>
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="text-lg md:text-xl group transition-all ease-linear hover:text-on-surface-color"
                            >
                                <div className="flex gap-1">
                                    {link.title}
                                    <FaSortDown />
                                </div>
                                {pathName === link.url && (
                                    <motion.div
                                        className="relative w-full h-0.5 mt-1"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        exit={{ width: '0%' }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    >
                                        <motion.span
                                            className="absolute left-0 top-0 h-full bg-secondary group-hover:bg-primary"
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        />
                                    </motion.div>
                                )}
                            </button>

                            <AnimatePresence>
                                {dropdownOpen === index && (
                                    <motion.div
                                        className="absolute left-0 mt-2 bg-primary text-on-primary shadow-lg rounded-lg"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={dropdownVariants}
                                    >
                                        {link.dropdown.map((sublink, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={sublink.url}
                                                className="block px-4 py-2 hover:bg-secondary hover:text-on-surface-color text-base md:text-lg rounded-lg"
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
                            className="text-lg md:text-xl group transition-all ease-linear hover:text-on-surface-color"
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
                                        className="absolute h-full bg-secondary group-hover:bg-primary transition-all ease-linear"
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
        </div>
    );
};

export default NavLinks;
