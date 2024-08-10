'use client'

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup when clicking outside or on another button
  };

  return (
    <div className='ml-[100px] flex items-center justify-start gap-5 bg-transparent text-white pl-2 pr-4 py-[13px]'>
     
      <div className='flex justify-start lg:justify-between items-center gap-20px  w-[100%] lg:w-[35%]'>
        <Link href={"/"}>
          <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] hover:text-orange-500 cursor-pointer border-r-[2px] border-[#ddd] pr-[15px] md:pr-[15px]'>
            Home
          </li>
        </Link>
        <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] hover:text-orange-500 cursor-pointer border-r-[2px] border-[#ddd] pr-[15px] md:pr-[15px]'>
          Game Store
        </li>
        <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] hover:text-orange-500 cursor-pointer'>
          Leaderboard
        </li>
      </div>
      <div className='hidden lg:flex items-center'>
        <div className='flex items-center border-[2px] border-white py-[10px] px-[25px] rounded-[50px] gap-[18px]'>
          <FaSearch style={{ fontSize: "20px" }} />
          <h1>What are you looking for?</h1>
        </div>
        
      </div>
      <div className='hidden lg:flex items-center justify-end w-[30%]'>
        <div className='flex items-center justify-center border-x-[2px] border-[#ddd] px-4'>
          <button type="button" onClick={handleClick}>
            <IoNotifications className="text-[35px]" />
          </button>
          {showPopup && (
            <div
              className="absolute top-[70px] bg-black text-black p-4 rounded shadow-lg z-10"
              onClick={closePopup}
            >
              <p>You have no notifications!</p>
            </div>
          )}
        </div>
        <div className='flex items-center justify-center border-r-[2px] border-[#ddd] px-4'>
          <HiMiniShoppingBag className="text-[35px]" />
        </div>
        <div className='flex items-center justify-center px-4'>
          <CgProfile className="text-[25px] md:text-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
