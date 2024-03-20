import React from 'react';
import marketStoriesData from '../data/MarketData'

const MarketStories = () => {
  return (
    <div className="bg-white">
      <h2 className="text-red-500 font-semibold  text-center pt-5 ">DISSCUSSION FORUM</h2>
      <div className="container mx-auto py-5 px-4" >
        <div className="space-y-4 "> 
         
          {marketStoriesData.map((story) => (
            <div key={story.id} className="max-w-xs bg-white rounded-lg shadow-md p-4 border border-black">
             
              <img src={story.image} alt="Story" className="w-full h-40 object-cover mb-4" />
             
              <p className="text-gray-800">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStories;
