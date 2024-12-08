import React from 'react'
import Image from 'next/image'
function Error() {
  return (

// {/* <div
//         className="w-full p-10 bg-no-repeat bg-center flex justify-center"
//         style={{
//           backgroundImage: "url('/images/om.svg')",
//           backgroundSize: "cover", // Use 'cover' to ensure the image covers the area correctly
//           backgroundPosition: "center top",
//         }}
//       >
//     <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
//     <p className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
//       404 Error
//     </p>
//     <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
//       <p className="text-xl sm:text-2xl md:text-3xl">Home</p>
//       <div className="flex items-center">
//         <Image
//           src="/images/CaretRight.svg"
//           width={10}
//           height={10}
//           alt="Vector Icon"
//         />
//         <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]">
//           404
//         </p>
//       </div>
//     </div>
//   </div>
//   <div>
//     <div className="flex flex-col justify-center items-center h-screen bg-white">
//       {/* 404 Heading */}
//       <h1 className="text-6xl font-bold text-[#FF9F0D] mb-4">404</h1>
      
//       {/* Subheading */}
//       <h2 className="text-2xl font-semibold text-black mb-2">
//         Oops! Looks like something's going wrong
//       </h2>
      
//       {/* Description */}
//       <p className="text-gray-600 text-center max-w-md mb-6">
//         Page cannot be found, so let’s figure it out in no time. Meanwhile, check out these handy links.
//       </p>
      
//       {/* Button */}
//       //  <button
//       //   className="bg-[#FF9F0D] text-white px-6 py-2 rounded hover:bg-[#e38b0c] transition duration-200"
//       //   onClick={() => (window.location.href = "/")}
//       // >
//       //   Go to Home
//       // </button> 
//     </div>



//   </div>
//   </div> */}
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
404 Error
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
    404
  </p>
</div>
</div>
</div>
</div>
<section className="text-black bg-white h-screen flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto flex justify-center items-center">
        <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full relative z-10 shadow-md">
          <h1 className="text-yellow-500 text-center text-4xl mb-1 font-bold ">
            404
          </h1>
          <p className='text-[32px] inline-flex'>Oops! Look likes something going wrong</p>
          <p className='text-[18px]'>Page Cannot be found! we’ll have it figured out in no time.
          Menwhile, cheek out these fresh ideas:</p>
          <button className=' flex justify-center bg-yellow-500 text-white w-[197px] h-[58px] top-[814px] left-[862px] pr-[48px] pl-[48px] pt-[16px] pb-[16px] rounded-[6px]'>Go to Home</button>
          </div>
          
          </div>
          </section>
          </>
  )
}

export default Error