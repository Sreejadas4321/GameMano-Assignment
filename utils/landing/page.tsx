'use client'


import React, { useState } from 'react';

import './page.css';

import Home from './home/page';
import Navbar from '../componenet/navbar/page';
import Sidebar from '../componenet/sidebar/page';
import HSidebar from '../componenet/hover-sidebar/page';
import { Trending } from './trending/page';
import { Cdata } from '../componenet/commondata/page';

import { usePathname } from 'next/navigation'



const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname()
 

  return (
    <div className='container'>
      <Navbar/>
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
       
      >
        {!isHovered && <Sidebar />}
        {isHovered && <HSidebar  />
        }
      </div>
      {pathname == "/" && (<>
        <Home/>
        <Trending/>
        <Cdata/>
      </>)}
      
      
    </div>
  );
};

export default Landing;