import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';
import { PiHandbagBold } from 'react-icons/pi';


function Header() {
  return (
    <header className="w-full  text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-5">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:w-2/5 items-center space-y-3 md:space-y-0 md:space-x-5">
          <a className="hover:text-gray-300 text-sm md:text-base ">Home</a>
          <a className="hover:text-gray-300 text-sm md:text-base">Menu</a>
          <a className="hover:text-gray-300 text-sm md:text-base">Blog</a>
          <a className="hover:text-gray-300 text-sm md:text-base">Pages</a>
          <a className="hover:text-gray-300 flex items-center text-sm md:text-base">
            About <RiArrowDropDownLine className="ml-1" />
          </a>
          <a className="hover:text-gray-300 text-sm md:text-base">Shop</a>
          <a className="hover:text-gray-300 text-sm md:text-base">Contact</a>
        </nav>

        {/* Logo */}
        <a className="flex justify-center items-center mx-auto md:mx-0 mt-4 md:mt-0">
          <span className="text-[#FF9F0D]  pb-10 text-lg md:text-xl">Food</span>
          <span className="text-lg pb-10 md:text-xl">tuck</span>
        </a>

        {/* Search & Icons */}
        <div className="flex flex-col md:flex-row md:w-2/5 items-center justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-5 mt-4 md:mt-0">
          <div className="relative w-full max-w-[290px] h-[44px] md:w-[290px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full focus:outline-none rounded-[27px] pl-3 pr-10 border-[1px] border-[#FF9F0D] text-black"
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
          </div>
          <PiHandbagBold className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
