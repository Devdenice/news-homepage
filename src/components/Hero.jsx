import React from "react";
import HeroImgMobile from "../app/images/image-web-3-mobile.jpg";
import HeroImgDesktop from "../app/images/image-web-3-desktop.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full z-0 mt-10 md:mt-0 mr-5 ">
      <Image
        className="sm:block md:hidden"
        priority
        src={HeroImgMobile}
        alt="Hero Image"
      />
      <Image
        className="hidden md:block"
        priority
        src={HeroImgDesktop}
        alt="Hero Image"
      />
      <div className="md:flex md:mt-1 items-center ">
        <h1 className="text-5xl font-bold my-6 md:w-6/12 ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="md:ml-10 md:w-11/12 ">
          <p className="text-base mb-6 text-[#5D5F79]  ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-[#F15E50] text-white font-semibold py-3 px-10 tracking-widest hover:bg-[#000019]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
