import React from "react";
import heroimg from "/heroimg.jpg";
const Herosection = () => {
  return (
    <div>
      <div className="md:flex justify-between md:my-16 w-[95%] mx-auto">
        <div className="md:mt-32 mt-10 md:w-3/2 w-full tracking-tighter  ">
          <h1 className="md:text-6xl text-3xl  navFont text-[#F5F5F5]  leading-snug">
            Struggling to find reliableSoftware Developers ?
          </h1>
          <p className="md:w-1/2 navFont my-5 text-[#A0A0A1]">
            Gitwork is a world class team of Product Owners, Project Managers,
            Engineers and Developers which focus on quality, price and
            efficiency.
          </p>
          <button className="bg-[#2860E1] text-sm py-3 navfont text-white px-8 rounded-md uppercase font-bold">
            {" "}
            Let's Work
          </button>
          <div className="mt-10">
            <p className="uppercase text-[20px] text-white ">We've worked with the best</p>
          </div>
        </div>
        <div className="md:h-[500px] md:w-[40%] mt-10 ">
          <img
            src={heroimg}
            alt=""
            className="h-full w-[450px] shadow-zinc-800 rounded-md shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
