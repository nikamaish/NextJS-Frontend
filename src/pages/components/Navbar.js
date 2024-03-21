import React, { useState } from 'react';

const Navbar = ({ onSelect }) => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    onSelect(option);
  };

  return (
    <nav className="flex justify-center items-center bg-gray-200 py-4">
      <button
        onClick={() => handleOptionClick('forum')}
        className={`mx-4 py-2 focus:outline-none ${activeOption === 'forum' ? 'border-b-2 border-blue-500' : ''}`}
      >
        Forum
      </button>
      <button
        onClick={() => handleOptionClick('stories')}
        className={`mx-4 py-2 focus:outline-none ${activeOption === 'stories' ? 'border-b-2 border-blue-500' : ''}`}
      >
        Stories
      </button>
    </nav>
  );
};

export default Navbar;
