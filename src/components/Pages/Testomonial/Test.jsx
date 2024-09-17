import React from "react";
import img1 from "/people1.jpg";
import img2 from "/people2.jpg";
import img3 from "/people3.jpeg";
import img4 from "/people4.jpeg";
import ficon from "/fcon.svg"
const data = [
  {
    ph1: img1,
    icon:ficon,
    name: "Steve",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img2,
    icon:ficon,
    name: "Hikaru",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img3,
    icon:ficon,
    name: "Clarsen",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img2,
    icon:ficon,
    name: "Rude",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
];
const Test = () => {
  return (
    <div className="md:w-[95%] mx-auto">
      <h1 className="text-[42px] navFont text-white font-bold tracking-wide pt-24">
        Testimonials
      </h1>
      <div className="md:grid grid-cols-2 gap-10 px-5 md:px-0 justify-center items-center">
        {data.map((info, idx) => (
          <div key={idx} className="flex flex-col ">
            <img src={info.icon} alt="" className="h-20 w-20"/>
            <p className="text-[#F0FFE1] text-start mb-4 tracking-tighter navFont">
              {info.description.substring(0, 200)}
            </p>
            <img
              src={info.ph1}
              alt=""
              className="rounded-full w-36 h-36 mb-4"
            />
            <h3 className="uppercase text-[20px] text-[#F0FFE1] mb-2 navFont" >
              {info.name}
            </h3>
            <h4 className="uppercase text-[#8A8A8B] navFont">
              {info.title[0] + info.title[1]}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
