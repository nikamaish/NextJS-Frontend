import React from 'react';

const MarketStories = () => {
  // Dummy data containing image URLs and descriptions
  const marketStoriesData = [
    {
      id: 1,
      image: 'https://www.investopedia.com/thmb/1YepRlCFPZlwBYbMF3h2x9vRGeM=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1058454392-85c8277555c6451d9cf79b5b26ca58ab.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/top-stock-picks-for-today-the-market-veteran-also-liked-bharat-dynamics-ltd-164112329-16x9_1.jpg?VersionId=u0lCNCJNT0TGrdAU0yD2p2QQa4s_avCJ&size=690:388',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: 'https://www.investopedia.com/thmb/1YepRlCFPZlwBYbMF3h2x9vRGeM=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1058454392-85c8277555c6451d9cf79b5b26ca58ab.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/top-stock-picks-for-today-the-market-veteran-also-liked-bharat-dynamics-ltd-164112329-16x9_1.jpg?VersionId=u0lCNCJNT0TGrdAU0yD2p2QQa4s_avCJ&size=690:388',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      image: 'https://www.investopedia.com/thmb/1YepRlCFPZlwBYbMF3h2x9vRGeM=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1058454392-85c8277555c6451d9cf79b5b26ca58ab.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 6,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/top-stock-picks-for-today-the-market-veteran-also-liked-bharat-dynamics-ltd-164112329-16x9_1.jpg?VersionId=u0lCNCJNT0TGrdAU0yD2p2QQa4s_avCJ&size=690:388',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 px-4">
        <div className="space-y-4">
          {/* Mapping over marketStoriesData array to generate cards */}
          {marketStoriesData.map((story) => (
            <div key={story.id} className="max-w-xs bg-white rounded-lg shadow-md p-4 border border-black">
              {/* Image */}
              <img src={story.image} alt="Story" className="w-full h-40 object-cover mb-4" />
              {/* Description */}
              <p className="text-gray-800">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStories;
