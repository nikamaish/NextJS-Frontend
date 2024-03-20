import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaBell, FaMessage } from 'react-icons/fa';
import forumData from '../data/ForumData';

const Forum = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-red-500 font-semibold mb-4">DISCUSSION FORUM</h2>
      {/* Mapping over forumData array to generate cards */}
      {forumData.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <FaUser className="text-gray-500 mr-2" />
              <span className="text-gray-500">{post.user.name}</span>
            </div>
            <span className="text-gray-500">{post.postedAt}</span>
          </div>
          <p className="text-gray-800">{post.content}</p>
          <div className="flex justify-between mt-2">
            <button className="text-gray-500 flex items-center">
              <FontAwesomeIcon icon={FaBell} className="mr-1" /> Like ({post.likes})
            </button>
            <button className="text-gray-500 flex items-center">
              <FontAwesomeIcon icon={FaMessage} className="mr-1" /> Comment ({post.views})
            </button>
            <button className="text-gray-500 flex items-center">
              <FontAwesomeIcon icon={FaBell} className="mr-1" /> Share ({post.shares})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forum;
