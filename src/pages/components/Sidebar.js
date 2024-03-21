import React from "react";
import {
  FaUser,
  FaBell,
  FaFileInvoiceDollar,
  FaAngleDown,
  FaComment,
  FaAngleRight
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="flex ">
      <aside className="bg-darkBlue w-64">
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
        <div className="p-4">
          <div>
            <ul>
              <li className="text-white my-4 cursor-pointer relative">
                <div className="flex items-center">
                  <FaComment className="mr-2" />
                  <span>Discussion Forum</span>
                </div>
                <FaAngleDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white" />
              </li>

              <li className="text-white my-2 cursor-pointer flex items-center">
                <FaFileInvoiceDollar className="text-white mr-2" />
                Market Stories
              </li>
              <div className="ml-6">
                <li className="text-white my-2 cursor-pointer">Sentiment</li>
                <li className="text-white my-2 cursor-pointer">Market</li>
                <li className="text-white my-2 cursor-pointer">Sector</li>
                <li className="text-white my-2 cursor-pointer">Watchlist</li>
                <li className="text-white my-2 cursor-pointer">Events</li>
                <li className="text-white my-2 cursor-pointer">News/Interview</li>
              </div>
            </ul>
          </div>
        </div>
      </aside>
      <div className="flex justify-center items-center h-screen">
      <div className="bg-darkBlue w-6 h-20 flex justify-center items-center">
      <FaAngleRight className="text-white" />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
