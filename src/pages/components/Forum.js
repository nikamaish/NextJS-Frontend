import Image from "next/image";
import { Inter } from "next/font/google";
import { FaUser, FaHeart, FaEye, FaComment, FaShare } from "react-icons/fa"; // Import the required icons
import forumData from "../../data/ForumData";

const Forum = () => {
  return (
    <div className="bg-white-100 p-4 max-w-xl mx-auto h-auto ">
      <div className="text-center">
        <span className="bg-gray-200 text-red-500 font-semibold  p-2 cursor-pointer">
          DISCUSSION FORUM
        </span>
      </div>

      {forumData.map((post, index) => (
        <div key={index} className="bg-white rounded-lg  shadow-xl p-4 mb-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span>
                <Image src={"/assets/userProfile.png"} width={50} height={50} />
              </span>
              <span className="text-gray-500">{post.user.name}</span>
              <span className="bg-blue rounded text-xs text-white ml-2 px-2 py-1">
                {post.user.sector}
              </span>
            </div>
            <span className="text-lightBlue">{post.postedAt}</span> {/* Fix typo here */}
          </div>
          <p className="text-black ml-12">{post.content}</p>
          <div className="flex justify-around mt-2">
            <div className="flex items-center ml-2">
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
