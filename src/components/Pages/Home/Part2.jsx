import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Import the Swiper core styles
import "swiper/css/pagination"; // Import the Swiper Pagination styles
import "./stl.css";
import img1 from "/people1.jpg";
import img2 from "/people2.jpg";
import img3 from "/people3.jpeg";
import img4 from "/people4.jpeg";
const data = [
  {
    ph1: img1,
    name: "Steve",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img2,
    name: "Steve",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img3,
    name: "Steve",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
  {
    ph1: img2,
    name: "Steve",
    description:
      "Working with Gitwork is a pleasure. we are impressed by the way they understand business requirements before setting the dev team to work. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.",
    title: ["Sancus", "Founder & CEO"],
  },
];
const Part2 = () => {
  return (
    <div className="[w-95%] mx-auto  bg-[#151516]">
      <div className="md:placeholder:flex">
        <div className="md:w-[40%]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="bg-black">
              {data.map((item, idx) => (
                <SwiperSlide>
                  <div key={idx} className="bg-black">
                    <p>{item.description}</p>
                    <img
                      src={item.ph1}
                      alt=""
                      className=" rounded-full"
                    />
                    <h3>{item.name}</h3>
                    <h5>{item.title[0] + item.title[1]}</h5>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="md:w-[60%]"></div>
      </div>
    </div>
  );
};

export default Part2;
