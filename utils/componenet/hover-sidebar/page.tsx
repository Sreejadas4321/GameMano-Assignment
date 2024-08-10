// components/Sidebar.js
import React from 'react';
import { FaHome, FaEnvelope, FaStore, FaCreditCard, FaTh, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./page.css"

const HSidebar = () => {
  return (
    <div className="hsidebar z-[100] sideNavigation">
      <div className="logo">GameQuest</div>
      <ul className="menu">
        <div className='flex items-center justify-start py-4 px-6'> 
          <div><FaHome className="icon" /></div>
          <div className='hover:text-orange-500 cursor-pointer'>Home</div>
        </div>
        
        <div className='flex items-center justify-start py-4 px-6'> 
          <div><FaEnvelope className="icon"/></div>
          <div className='relative hover:text-orange-500 cursor-pointer'><span className="absolute top-[1px] left-[-20px] bg-red-600 rounded-[50%]  w-[8px] h-[8px]"></span > Messages</div>
        </div>
        <div className='flex items-center justify-start py-4 px-6'> 
          <div><FaStore className="icon" /></div>
          <div className='hover:text-orange-500 cursor-pointer'>Game Store</div>
        </div>
        <div className='flex items-center justify-start py-4 px-6'> 
          <div><FaCreditCard className="icon" /> </div>
          <div className='hover:text-orange-500 cursor-pointer'>Payment</div>
        </div>
        <div className='flex items-center justify-start py-4 px-6'> 
          <div><FaTrophy className="icon" /> </div>
          <div className='hover:text-orange-500 cursor-pointer'>Leaderboard</div>
        </div>
       
      </ul>
      <div className="bottom-line"></div>
      <ul className="settings">
      <div className='flex items-center justify-start p-4'> 
          <div><FaCog className="icon" /></div>
          <div className='hover:text-orange-500 cursor-pointer'>Settings</div>
        </div>
        <div className='flex items-center justify-start p-4'> 
          <div><FaSignOutAlt className="icon" /></div>
          <div className='hover:text-orange-500 cursor-pointer'>Logout</div>
        </div>
        
      </ul>
    </div>
  );
};

export default HSidebar;
