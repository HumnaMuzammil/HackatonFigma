import React from 'react';
import { FaFacebookF, FaPinterest, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

function Sidebar() {
  return (
    <div className="sm:left-4 top-1/4 flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
      {/* Vertical Line */}
      <div className="w-[2px] h-16 sm:h-20 bg-gray-500"></div>

      {/* Facebook Icon */}
      <div className=" text-white  rounded-full">
        <FaFacebookF size={16} className="sm:text-lg md:text-xl" />
      </div>

      {/* Twitter Icon */}
      <div className=" text-[#FF9F0D] rounded-full">
        <FaTwitter size={16} className="sm:text-lg md:text-xl" />
      </div>

      {/* Pinterest Icon and Label */}
      <div className=" text-white text-xs sm:text-sm px-4 py-1 rounded-lg flex items-center space-x-2">
        <FaPinterest size={16} className="sm:text-lg md:text-xl" />
      </div>

      {/* Vertical Line */}
      <div className="w-[2px] h-16 sm:h-20 bg-gray-500"></div>
    </div>
  );
}

export default Sidebar;
