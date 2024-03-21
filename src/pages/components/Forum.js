import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaUser, FaHeart, FaEye, FaComment, FaShare } from "react-icons/fa";
import forumData from "../data/ForumData";

const Forum = () => {
  return (
    <div className="bg-white-100 p-4 max-w-lg mx-auto h-auto">
      <h2 className="text-red-500 font-semibold mb-4 text-center ">
        DISSCUSSION FORUM
      </h2>
      {forumData.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl p-4 mb-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span>
                <Image src={"/assets/userProfile.png"} width={50} height={50} />
              </span>
              <span className="text-gray-500">{post.user.name}</span>
            </div>
            <span className="text-lightBlue">{post.postedAt}</span>
          </div>
          <p className="text-black ml-12 ">{post.content}</p>
          <div className="flex justify-around mt-2">
            <div className="flex items-center ml-6">
              <FaHeart className="mr-2" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center ml-2">
              <FaEye className="mr-2" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center ml-2">
              <FaComment className="mr-2" />
              <span>{post.comment}</span>
            </div>
            <div className="flex items-center ml-2">
              <FaShare className="mr-2" />
              <span>{post.shares}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forum;
