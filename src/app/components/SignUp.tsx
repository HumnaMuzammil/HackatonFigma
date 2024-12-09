import React from 'react';
import Image from 'next/image';
import { IoIosLock, IoIosPerson, IoMdMail} from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
function SignUp() {
  return (
    <>
   <div
        className="w-full p-10 bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/images/om.svg')",
          backgroundSize: "cover", // Use 'cover' to ensure the image covers the area correctly
          backgroundPosition: "center top",
        }}
      >
    <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
    <p className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
      Sign up Page
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <p className="text-xl sm:text-2xl md:text-3xl">Home</p>
      <div className="flex items-center">
        <Image
          src="/images/CaretRight.svg"
          width={10}
          height={10}
          alt="Vector Icon"
        />
        <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]">
          Sign up
        </p>
      </div>
    </div>
  </div>
  </div>
    <section className="text-black bg-white h-screen flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Sign Up
          </h2>
          
          <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded ">
            <input
              type="Name"
              id="Name"
              name="Name"
              placeholder='Name'

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
             <IoIosPerson />
             </div>
          </div>
          <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded">
          <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
           <IoMdMail />
          </div>
          </div>
          <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded ">
          <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <IoIosLock />
          </div>
          </div>
          <div className='relative mb-4 font-size-[14px] text-[#333333]'>
<input type="checkbox" name="" id="" /> Remember Me
          </div>
          <button className="text-white bg-[#FF9F0D]  border-0 py-2 px-6 focus:outline-none hover:bg-[#FF9F0D] rounded text-lg">
            SignUp
          </button>
          <div className='font-thin flex items-end justify-end p-5'>Forget Password?</div>
          <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded">
          <input
              type="Signup with Google"
              id="Signup with Google"
              name="Signup with Google"
              placeholder='Signup with Google'

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <FcGoogle />
          </div>
          </div>
          <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded ">
          <input
              type="Signup with Apple"
              id="Signup with Apple"
              name="Signup with Apple"
              placeholder="Signup with Apple"

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <FaApple />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default SignUp;
