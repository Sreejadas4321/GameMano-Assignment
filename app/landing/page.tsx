'use client'


import React, { useState } from 'react';

import './page.css';
import Navbar from './navbar/page';
import Sidebar from './sidebar/page';
import HSidebar from './hover-sidebar/page';
import Home from './home/page';


const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='container'>
      <Navbar/>
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className='sidebar-container'
      >
        <Sidebar/>
        {isHovered && (
          <HSidebar style={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? '200px' : '0px',
            transition: 'opacity 2s ease, width 2s ease'
          }} />
        )}
      </div>
      <Home/>
    </div>
  );
};

export default Landing;