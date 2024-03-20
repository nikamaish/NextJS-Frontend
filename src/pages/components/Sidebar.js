import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaBell, FaFileInvoiceDollar } from 'react-icons/fa';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Sidebar = () => {



  
  return (
    <aside className="bg-darkBlue w-64 h-screen">
         <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaUser className="text-white mr-2" />
            <span className="text-white">Hello, User</span>
          </div>
          <FaBell className="text-white cursor-pointer" />
        </div>
        </div>
        <hr />
        <div className="p-4">
        <div>
          <ul>
          
          <li className="text-white my-2 cursor-pointer relative">
              <span>Discussion Forum</span>
              <FontAwesomeIcon icon={faCaretDown} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white" />
            </li>

            <li className="text-white my-2 cursor-pointer flex items-center">
              <FaFileInvoiceDollar className="text-white mr-2" />
              Market Stories
            </li>
            <li className="text-white my-2 cursor-pointer">Sentiment</li>
            <li className="text-white my-2 cursor-pointer">Market</li>
            <li className="text-white my-2 cursor-pointer">Sector</li>
            <li className="text-white my-2 cursor-pointer">Watchlist</li>
            <li className="text-white my-2 cursor-pointer">Events</li>
            <li className="text-white my-2 cursor-pointer">News/Interview</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};



export default Sidebar;
