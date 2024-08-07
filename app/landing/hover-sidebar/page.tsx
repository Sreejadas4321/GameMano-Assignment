// components/Sidebar.js
import React from 'react';
import { FaHome, FaEnvelope, FaStore, FaCreditCard, FaTh, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./page.css"

const HSidebar = () => {
  return (
    <div className="hsidebar">
      <div className="logo">GameQuest</div>
      <ul className="menu">
        <li><FaHome className="icon" /> Home</li>
        <li><FaEnvelope className="icon"/><span className="notification-dot"></span> Messages</li>
        <li><FaStore className="icon" /> Game Store</li>
        <li><FaCreditCard className="icon" /> Payments</li>
        <li><FaTrophy className="icon" /> Leaderboard</li>
      </ul>
      <div className="bottom-line"></div>
      <ul className="settings">
        <li><FaCog className="icon" /> Settings</li>
        <li><FaSignOutAlt className="icon" /> Logout</li>
      </ul>
    </div>
  );
};

export default HSidebar;
