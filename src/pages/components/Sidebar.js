import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaBell, FaMessage } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <aside className="bg-darkBlue w-64 h-screen">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <FaUser className="text-white mr-2" />
          <span className="text-white">Hello, User</span>
        </div>
        <FaBell className="text-white" />
      </div>
      <div>
        
      </div>
      <hr />
    </aside>
  );
};

export default Sidebar;
