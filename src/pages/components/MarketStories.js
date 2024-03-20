import React from 'react';

const MarketStories = () => {
  // Dummy data containing image URLs and descriptions
  const marketStoriesData = [
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      description: 'Description for image 1',
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      description: 'Description for image 2',
    },
    // Add more items as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Mapping over marketStoriesData array to generate cards */}
      {marketStoriesData.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow-md p-4">
          {/* Image */}
          <img src={story.image} alt="Story" className="w-full h-40 object-cover mb-4" />
          {/* Description */}
          <p className="text-gray-800">{story.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketStories;
