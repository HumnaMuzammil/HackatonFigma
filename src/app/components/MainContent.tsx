import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
function MainContent() {
  return (
    <section className=" body-font flex  overflow-hidden">
      <div className="left-28">
        <Sidebar />
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-[472px] h-[356px] lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font tracking-widest great-vibes-regular  text-[#FF9F0D]">
              Its Quick & Amusing!
            </h2>
            <h1 className=" text-3xl title-font font-medium mb-4">
              <span className="text-[#FF9F0D]">Th</span>
              e Art of speed <br />
              food Quality
            </h1>

            <p className="leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <div className="flex">
              <button className="flex mr-auto text-white bg-[#FF9F0D] border-0 py-2 px-6 focus:outline-none rounded-[30px]">
                Button
              </button>
            </div>
          </div>
        
          <Image
          alt="ecommerce"
            className="lg:w-1/2 lg:h-[400px] h-64 object-cover object-center rounded"
            src={"/images/main.svg"}
            width={400}
            height={64}>
          </Image>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
