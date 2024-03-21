// import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import marketStoriesData from "../../data/MarketData";

const MarketStories = () => {
  return (
    <div className="bg-white mr-5">
       <div className="text-center mt-4 ">
        <span className="bg-gray-200 text-red-500 p-2 font-semibold cursor-pointer">
          MARKET STORIES
        </span>
      </div>

      <div className="container mx-auto py-5 px-4">
        <div className="space-y-4 ">
          {marketStoriesData.map((story) => (
            <div
              key={story.id}
              className="max-w-xs bg-white rounded-lg shadow-md p-4 border border-black"
            >
              <Image
                src={story.image}
                width={300}
                height={150}
                alt="Story Image"
              />
              <p className="text-black text-center py-2 font-medium">{story.heading}</p>
              <p className="text-gray-800">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStories;
