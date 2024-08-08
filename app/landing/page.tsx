'use client'


import React, { useState } from 'react';

import './page.css';

import Home from './home/page';
import Navbar from '../componenet/navbar/page';
import Sidebar from '../componenet/sidebar/page';
import HSidebar from '../componenet/hover-sidebar/page';
import { Card, Trending } from './tending/page';



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
        {!isHovered && <Sidebar />}
        {isHovered && <HSidebar  />
        }
      </div>
      <Home/>
      <Trending/>
    </div>
  );
};

export default Landing;