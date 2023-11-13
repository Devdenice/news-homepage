import React from "react";

const Side = () => {
  return (
    <div className="my-12 md:my-0 max-h-screen">
      <div className="bg-[#000019] text-white py-11 px-12">
        <h1 className="text-[#E9AB53] text-2xl font-semibold">NEW</h1>

        <div className="my-5">
          <h3 className="text-lg font-semibold mb-3 hover:text-[#E9AB53] cursor-pointer">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-base">
            Will hydrogen-fueled cars ever catch-up to EVs?
          </p>
        </div>
        <hr className="my-5" />
        <div className="mb-5">
          <h3 className="text-lg font-semibold mb-3 hover:text-[#E9AB53] cursor-pointer">
            The Downside of AIartistry
          </h3>
          <p className="text-base">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr className="my-5" />
        <div className="mb-5">
          <h3 className="text-lg font-semibold mb-3 hover:text-[#E9AB53] cursor-pointer">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-base">
            Private funding by VC firms is down 50% YOY.We take a look at what
            the means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Side;
