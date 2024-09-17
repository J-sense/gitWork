import React from "react";
import heroimg from "/heroimg.jpg";
import { Link } from "react-router-dom";
import cli from "/client.jpg";
import cli2 from "/client2.jpg";
import Letstalk from "../Home/Letstalk";
const Hero = () => {
  return (
    <div>
      <div className="md:flex justify-between md:my-16 w-[95%] mx-auto">
        <div className="md:mt-32 mt-10 md:w-3/2 w-full tracking-tighter  ">
          <h1 className="md:text-6xl text-3xl  navFont text-[#F5F5F5]  font-semibold  leading-snug">
            We are changing the way UK-based companies think about hiring
            Software Developers
          </h1>
          <p className="md:w-1/2 navFont my-5 text-[#A0A0A1]">
            Hiring software developers doesn't always have to be a daunting and
            expensive process. Gitwork is here to help every step of the way.
          </p>
          <button className="bg-[#2860E1] text-sm py-3 navfont  text-white px-8 rounded-md uppercase font-bold">
            {" "}
            What People say
          </button>
          <div className="mt-10">
            <p className="uppercase text-[16px] tracking-wide font-semibold text-white ">
              We've worked with the best
            </p>
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
      <div className="flex gap-5  w-[95%] mx-auto">
        <Link className="uppercase text-[15px] font-semibold text-[#494448]  border-b-4 border-b-slate-800 pb-1">
          Our vision
        </Link>
        <Link className="uppercase text-[15px] font-semibold text-[#494448]  border-b-4 border-b-slate-800 pb-1">
          Our Story
        </Link>
      </div>
      <div className="mt-16 w-[95%] mx-auto">
        <p className="text-[42px] text-[#ffff] navFont  font-semibold">
          Our Vision
        </p>
        <div className="md:flex gap-3 items-center">
          <div className="md:w-[60%]">
            <div className="bg-[#292929] p-5 rounded-lg">
              <div className="flex justify-between">
                <p className="text-[28px] navFont text-[#FFFFFF] w-2/3">
                  {" "}
                  We build software and software development teams for awesome
                  companies.
                </p>

                <h2 className="font-bold text-[16px] navFont text-[#6D6D6D]">
                  01
                </h2>
              </div>
              <p className="text-[16px] text-[#6D6D6D] tracking-tight leading-5">
                We are a collective of technology experts with a passion for
                building "things". Those "things" include websites, platforms,
                apps or business systems. We love being part of an extended team
                or taking your requirements away to build in a fully managed
                project.
              </p>
            </div>
            <div className="flex mt-3 gap-3">
              <div className="w-[60%]">
                {" "}
                <img
                  src={cli}
                  alt=""
                  className="h-44 w-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[40%]">
                <img
                  src={cli2}
                  alt=""
                  className="h-44 w-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#292929] p-5 rounded-lg mt-3">
              <div className="flex justify-between">
                <p className="text-[28px] navFont text-[#FFFFFF] w-2/3 tracking-tight leading-9">
                  {" "}
                  We build software and software development teams for awesome
                  companies.
                </p>

                <h2 className="font-bold text-[16px] navFont text-[#6D6D6D]">
                  01
                </h2>
              </div>
              <p className="text-[16px] text-[#6D6D6D] tracking-tight leading-5">
                We are a collective of technology experts with a passion for
                building "things". Those "things" include websites, platforms,
                apps or business systems. We love being part of an extended team
                or taking your requirements away to build in a fully managed
                project.
              </p>
            </div>
          </div>
          <div className="md:w-[40%]">
            <div className="bg-[#292929] p-5 rounded-lg mt-3">
              <div className="flex justify-between">
                <p className="text-[28px] navFont text-[#FFFFFF] w-2/3 tracking-tight leading-9">
                  {" "}
                  We build software and software development teams for awesome
                  companies.
                </p>

                <h2 className="font-bold text-[16px] navFont text-[#6D6D6D]">
                  01
                </h2>
              </div>
              <p className="text-[16px] text-[#6D6D6D] tracking-tight leading-5">
                We are a collective of technology experts with a passion for
                building "things". Those "things" include websites, platforms,
                apps or business systems. We love being part of an extended team
                or taking your requirements away to build in a fully managed
                project.
              </p>
            </div>
            <div className="bg-[#292929] p-5 rounded-lg mt-3">
              <div className="flex justify-between">
                <p className="text-[28px] navFont text-[#FFFFFF] w-2/3 tracking-tight leading-9">
                  {" "}
                  We build software and software development teams for awesome
                  companies.
                </p>

                <h2 className="font-bold text-[16px] navFont text-[#6D6D6D]">
                  01
                </h2>
              </div>
              <p className="text-[16px] text-[#6D6D6D] tracking-tight leading-5">
                We are a collective of technology experts with a passion for
                building "things". Those "things" include websites, platforms,
                apps or business systems. We love being part of an extended team
                or taking your requirements away to build in a fully managed
                project.
              </p>
            </div>
            <div className="bg-[#292929] p-5 rounded-lg mt-3">
              <div className="flex justify-between">
                <p className="text-[28px] navFont text-[#FFFFFF] w-2/3 tracking-tight leading-9">
                  {" "}
                  We build software and software development teams for awesome
                  companies.
                </p>

                <h2 className="font-bold text-[16px] navFont text-[#6D6D6D]">
                  01
                </h2>
              </div>
              <p className="text-[16px] text-[#6D6D6D] tracking-tight leading-5">
                We are a collective of technology experts with a passion for
                building "things". Those "things" include websites, platforms,
                apps or business systems. We love being part of an extended team
                or taking your requirements away to build in a fully managed
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div  className="mt-5" >
        <Letstalk/>
      </div>
    </div>
  );
};

export default Hero;
