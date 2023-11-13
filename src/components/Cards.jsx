import Image from "next/image";
import React from "react";
import RetroComputer from "../app/images/image-retro-pcs.jpg";
import Keyboard from "../app/images/image-top-laptops.jpg";
import Console from "../app/images/image-gaming-growth.jpg";

const Cards = () => {
  return (
    <div className="py-5 container ">
      <div className="flex flex-col items-center md:flex-row justify-between gap-4 ">
        <div className="flex">
          <Image
            className="mr-4 object-contain h-[120px] w-[120px]"
            src={RetroComputer}
            alt="Retro Computer"
          />
          <div className=" flex flex-col float-right w-11/12 ">
            <h1 className="text-[#C5C6CE] text-2xl font-bold">01</h1>
            <h3 className="text-md text-[#000019] font-bold hover:text-[#F15E50] cursor-pointer">
              Reviving Retro PCs
            </h3>
            <p className="text-[#5D5F79] text-sm">
              What happeens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            className=" mr-4 object-contain h-[120px] w-[120px]"
            src={Keyboard}
            alt="Retro Computer"
          />
          <div className="flex flex-col float-right w-11/12 ">
            <h1 className="text-[#C5C6CE] text-2xl font-bold">02</h1>
            <h3 className="text-md text-[#000019] font-bold hover:text-[#F15E50] cursor-pointer">
              Top 10 Laptops of 2022
            </h3>
            <p className="text-[#5D5F79] text-sm">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            className="mr-4 object-contain h-[120px] w-[120px]"
            src={Console}
            alt="Retro Computer"
          />
          <div className="flex flex-col float-right w-11/12 ">
            <h1 className="text-[#C5C6CE] text-2xl font-bold">03</h1>
            <h3 className="text-md text-[#000019] font-bold hover:text-[#F15E50] cursor-pointer">
              The Growth of Gaming
            </h3>
            <p className="text-[#5D5F79] text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
