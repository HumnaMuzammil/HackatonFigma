
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { PiClockClockwiseBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      {/* Support Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-6 md:px-20 lg:px-[135px] py-6 md:py-12">
        <div className="text-white md:w-[50%] w-full">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Don&#39;t wait. Make a smart & logical quote here. It&#39;s pretty
            easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 mr-2 rounded"
            aria-label="Enter Your Email Address"
          />
          <button
            className="text-[#FF9F0D] bg-white py-2 px-4 rounded"
            aria-label="Subscribe"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-6 md:mx-20 lg:mx-[135px]" />

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20 lg:px-[135px] py-8">
        {/* About Us */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-white">
            About Us
          </h2>
          <p className="text-gray-400 mt-4">
            Corporate clients and leisure travelers rely on us for safe,
            professional chauffeured car service in major cities worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-[#FF9F0D] w-12 h-12 flex justify-center items-center rounded-full">
              <PiClockClockwiseBold className="text-white text-[24px]" />
            </div>
            <div>
              <h3 className="text-white">Opening Hours</h3>
              <p className="text-gray-400">Mon - Sat: 8.00 AM - 6.00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="font-bold mb-3">Useful Links</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-400">About</a>
            </li>
            <li>
              <a className="text-gray-400">News</a>
            </li>
            <li>
              <a className="text-gray-400">Partners</a>
            </li>
            <li>
              <a className="text-gray-400">Team</a>{" "}
            </li>
            <li>
              <a className="text-gray-400">Contact</a>{" "}
            </li>
          </nav>
        </div>

        {/* Help */}
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-[24px] font-semibold uppercase text-white">
            Help?
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-400">FAQ</a>
            </li>
            <li>
              <a className="text-gray-400">Terms & Condition</a>
            </li>
            <li>
              <a className="text-gray-400">Reporting</a>
            </li>
            <li>
              <a className="text-gray-400">Documentation</a>{" "}
            </li>
            <li>
              <a className="text-gray-400">Support Policy</a>{" "}
            </li>
            <li>
              <a className="text-gray-400">Privacy</a>{" "}
            </li>
          </nav>
        </div>
        {/* Recent Posts */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-white">
            Recent Posts
          </h2>
          
          <ul className="text-gray-500 dark:text-gray-400 font-medium gap-[14px]">
            <li className="flex gap-[16.5px]">
              <Image
                src={"/images/f1.svg"}
                alt="Fod"
                width={80.24}
                height={79.76}
              />

              <div className="my-5 ml-1">
                <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                  Is fastfood good for your body?
                </h2>
                <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                  20 Feb 2022
                </h3>
              </div>
            </li>
            <li className="flex gap-[16.5px]">
              <Image
                src={"/images/f1.svg"}
                alt="Fod"
                width={80.24}
                height={79.76}
              />

              <div className="my-5 ml-1">
                <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                  Change your food habit With organic food
                </h2>
                <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                  20 Feb 2022
                </h3>
              </div>
            </li>
            <li className="flex gap-[16.5px]">
              <Image
                src={"/images/f1.svg"}
                alt="Fod"
                width={80.24}
                height={79.76}
              />

              <div className="my-5 ml-1">
                <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                  Do you like fastfood for your life?
                </h2>
                <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                  20 Feb 2022
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 dark:bg-[#4F4F4F] px-6 py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          © 2023 <Link href="https://flowbite.com">Flowbite™</Link>. All Rights
          Reserved.
        </span>
        <div className="flex justify-center gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
            (Icon, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 w-9 h-9 flex items-center justify-center rounded-full"
              >
                <Icon className="text-gray-800 dark:text-white text-lg" />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
