// components/Navbar.js
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between bg-transparent text-white px-[7%] py-[13px]'>
      <h2 className='font-press-start text-[30px] md:text-[60px] pr-[20px] md:pr-[50px] text-[#EAD2A7]'>QG</h2>
      <div className='flex-1 flex justify-center text-center pr-[90px] md:pr-[90px]'>
        <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] cursor-pointer border-r-[2px] border-[#ddd] pr-[15px] md:pr-[15px]'>Home</li>
        <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] cursor-pointer border-r-[2px] border-[#ddd] pr-[15px] md:pr-[15px]'>Game Store</li>
        <li className='inline-block mx-[10px] md:mx-[15px] text-[18px] md:text-[18px] cursor-pointer'>Leaderboard</li>
      </div>
      <div className='hidden lg:flex items-center'>
        <div className='flex items-center border-[2px] border-black py-[10px] px-[25px] rounded-[50px] gap-[18px]'>
          <FaSearch style={{ fontSize: "20px" }} />
          <h1>What are you looking for?</h1>
        </div>
        <div className='h-[30px] mx-[10px] border-r-[2px] border-[#ddd]'></div>
      </div>
      <div className='flex items-center text-center justify-center gap-[20px] md:gap-[30px] my-[10px]'>
        <IoNotifications className="border-r-[2px] border-[#ddd] pr-[10px] text-[25px] md:text-[35px]" />
        <HiMiniShoppingBag className="border-r-[2px] border-[#ddd] pr-[10px] text-[25px] md:text-[35px]" />
        <CgProfile className="text-[25px] md:text-[35px]" />
      </div>
    </div>
  );
};

export default Navbar;
