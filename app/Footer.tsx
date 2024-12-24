import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";
const foot = [
  {
    logo: "./icon.png",
    title: "THINKFEAT",
    caption: "There are many variations of Lorem Ipsum available, but the majority have suffered alteration. We are privileged to work with",
    faceicon: <CiFacebook className='dark:hover:text-primary'/>,
    googleicon: <FaGooglePlusG className='dark:hover:text-primary'/>,
    twittericon: <FaXTwitter className='dark:hover:text-primary'/>,
    laanicon: <FaRss className='dark:hover:text-primary'/>,
  },
  {
    title: "QUICK LINKS",
    service: "Our Services",
    choose: "Why Choose Us",
    company: "Our Company",
    business: "Our Business",
    work: "How To Works",
  },
  {
    title: "OUR CONTACTS",
    address: "Address: Hyderabad Qasimabad Phase 2 Jatoi Chownk",
    phone: "Phone:03342673135",
    email: "thinkfeat@gamil.com"
  },
];

const Footer = () => {
  return (
    <div className='dark:bg-[#0D0D0D] bg-[#E0E0E0] dark:text-on-surface-color w-full h-full gap-x-4 lg:gap-x-0 lg:flex text-gray-600 shadow-lg dark:shadow-white shadow-slate-800'>
      {foot.map((item, index) => (
        <div key={index} className='text-secondary footer-column justify-between px-12'>
          <div className='flex items-center gap-2 mt-8'>
            {item.logo && <img src={item.logo} alt="Logo" className="w-8 h-8 mt-4" />}
            <h3 className='mobile-title-large mt-4'>{item.title}</h3>
          </div>
          <div className='cursor-pointer'>
            {item.caption && <p className='text-justify max-w-lg'>{item.caption}</p>}
            {(item.faceicon || item.googleicon || item.twittericon || item.laanicon) && (
              <div className='flex gap-4 mt-2 text-3xl'>
                {item.faceicon}
                {item.googleicon}
                {item.twittericon}
                {item.laanicon}
              </div>
            )}
            {item.address && <p className=''>{item.address}</p>}
            {item.phone && <p>{item.phone}</p>}
            {item.email && <p>{item.email}</p>}
            {item.service && <p className='dark:hover:text-primary'>{item.service}</p>}
            {item.choose && <p className='dark:hover:text-primary'>{item.choose}</p>}
            {item.company && <p className='dark:hover:text-primary'>{item.company}</p>}
            {item.business && <p className='dark:hover:text-primary'>{item.business}</p>}
            {item.work && <p>{item.work}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
