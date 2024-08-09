// components/Sidebar.js
import React from 'react';
import { FaHome, FaEnvelope, FaStore, FaCreditCard, FaTh, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./page.css"


const Sidebar = () => {
  return (
    <div className="sidebar ">
      <ul className="menu">
        <li><FaHome className="icon" /></li>
        <li><FaEnvelope className="icon"><span className="notification-dot"></span></FaEnvelope></li>
        <li><FaStore className="icon" /></li>
        <li><FaCreditCard className="icon" /></li>
        <li><FaTh className="icon" /></li>
        <li><FaTrophy className="icon" /></li>
      </ul>
      
      <ul className="settings">
        <li><FaCog className="icon" /></li>
        <li><FaSignOutAlt className="icon" /></li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
