import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Import the Swiper core styles
import "swiper/css/pagination"; // Import the Swiper Pagination styles
import "./style.css";
import img1 from "/projects1.png";
import img2 from "/projects2.png";
import img3 from "/projects3.png";
import img4 from "/projects4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies = () => {
  return (
    <div className="[w-95%] mx-auto px-10 bg-[#151516]">
      <div className="md:flex py-16 text-[42px] md:items-center">
        <div className="md:w-[30%] ">
          <h1 className="navFont font-bold text-[#FFFFFF]">Case studies</h1>
          <p className="text-[16px] text-[#B1B1B1]">
            We have worked across many sectors, building projects from web
            platforms and apps to websites and integrations.
          </p>
          <button className="bg-[#2860E1] text-sm py-3 navfont text-white px-8 rounded-md uppercase font-bold">
            {" "}
            Let's Work
          </button>
        </div>
        <div className="md:w-[70%] mt-16">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
              
            </SwiperSlide>
            
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
