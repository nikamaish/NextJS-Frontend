import React, { useState } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const Navbar = ({ onSelect }) => {
  const [activeOption, setActiveOption] = useState('forum');

  const handleOptionClick = (option) => {
    setActiveOption(option);
    onSelect(option); // Pass the selected option to the parent component if needed
  };

  return (
    <div className='bg-darkBlue'>
      <nav className="grid grid-cols-2 gap-6 justify-center items-center text-white">
        <button
          onClick={() => handleOptionClick('forum')}
          className={`py-2 focus:outline-none ${activeOption === 'forum' ? 'border-b-4 border-red-500 bg-blue p-15' : ''}`}
        >
          Forum
        </button>
        <button
          onClick={() => handleOptionClick('stories')}
          className={`py-2 focus:outline-none ${activeOption === 'stories' ? 'border-b-4 border-red-500 bg-blue p-10' : ''}`}
        >
          Stories
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
