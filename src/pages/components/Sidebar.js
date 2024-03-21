import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

import {
  FaUser,
  FaBell,
  FaFileInvoiceDollar,
  FaAngleDown,
  FaComment,
  FaAngleRight,
  FaAngleLeft, // Added import for left arrow icon
} from "react-icons/fa";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    setSidebarVisible(window.innerWidth >= 700);
  }, []);


  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex ">
      {sidebarVisible  && (
<aside className={`bg-darkBlue w-64 transition-all duration-300 ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaUser className="text-white mr-2" />
                <span className="text-white">Hello, User</span>
              </div>
              <FaBell className="text-white cursor-pointer" />
            </div>
          </div>
          <hr />
          <div>
            <ul>
              <li className=" flex items-center bg-blue text-white mt-5 px-2 py-1 cursor-pointer relative">
                <FaComment className="mr-2" />
                <span>Discussion Forum</span>
                <FaAngleDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white mr-3" />
              </li>

              <li className="flex items-center text-white my-2 ml-2 cursor-pointer ">
                <FaFileInvoiceDollar className="text-white mr-2" />
                Market Stories
              </li>
              <div className="ml-8">
                <li className="text-white my-2 cursor-pointer">Sentiment</li>
                <li className="text-white my-2 cursor-pointer">Market</li>
                <li className="text-white my-2 cursor-pointer">Sector</li>
                <li className="text-white my-2 cursor-pointer">Watchlist</li>
                <li className="text-white my-2 cursor-pointer">Events</li>
                <li className="text-white my-2 cursor-pointer">
                  News/Interview
                </li>
              </div>
            </ul>
          </div>
        </aside>
      )}
      <div className="flex justify-center items-center h-screen ">
        <div
          className="bg-darkBlue w-6 h-20 flex justify-center items-center cursor-pointer transition-all duration-300 ${sidebarVisible ? 'translate-x-0' : '-translate-x-64'}"
          onClick={toggleSidebar}
        >
          {sidebarVisible ? <FaAngleLeft className="text-white " /> : <FaAngleRight className="text-white " />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
