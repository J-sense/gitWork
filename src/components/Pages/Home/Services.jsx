import React from "react";
import serviceimg1 from "/service1.svg";
import serviceimg2 from "/service2.svg";
import serviceimg3 from "/service3.svg";
import serviceimg4 from "/service4.svg";
const Services = () => {
  const items = [
    {
      id: 1,
      image: serviceimg1,
      title: "Remote Devs",
      headline:
        "Hire one or build a team of software developers that you manage. Easily integrate them into your existing team or give them a set piece of work.",
    },
    {
      id: 2,
      image: serviceimg2,
      title: "Website Builds",
      headline:
        "From complex platforms to business websites, our team of project managers, designers and developers will deliver on your requirements and goals.",
    },
    {
      id: 3,
      image: serviceimg3,
      title: "App Development",
      headline:
        "Some of the apps we have built have had millions of engaged users. Our team of designers and developers can build your ideas from scratch or manage existing projects.",
    },
    {
      id: 4,
      image: serviceimg4,
      title: "Web 3.0",
      headline:
        "We have extensive experience across the leading blockchains. Work with us to launch  NFT or blockchain projects . All we need is a concept or project idea.",
    },
  ];

  return (
    <div className="bg-[#292929] py-16 w-full">
      <div className="w-[95%] mx-auto">
        <div className="leading-relaxed mb-10">
          <h1 className="text-[42px] text-[#FFFFFF] navFont font-semibold">Our services</h1>
          <p className="text-[#A0A0A0] text-[16px]">
            At our core, we provide resources for software development <br></br>
            and engineering, however our services expand way beyond.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#383838] rounded-2xl p-4 h-80">
              <div className="flex justify-between">
                <div className=" border px-6 py-2 rounded-xl">
                  <img src={item.image} alt="" className="w-10 h-10 " />
                </div>
                <p className="text-xl text-[#7A7A7A] font-bold">0{item.id}</p>
              </div>
              <div className="mt-9">
                <h3 className="text-[28px] text-[#FFFFFF] font-semibold">{item.title}</h3>
                <p className="text-[#A0A0A0]">{item.headline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
