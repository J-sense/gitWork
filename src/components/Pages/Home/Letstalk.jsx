import React from "react";
import client1 from "/client.jpg"
import client2 from "/client2.jpg"
const Letstalk = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="bg-[#2860E1] md:grid grid-cols-2 rounded-md p-8 gap-5">
        <div className="">
          <h1 className="text-[42px] navFont text-white font-bold">Do you have an idea? Let’s talk about it.</h1>
    
          <button className="text-[16px] uppercase px-10 py-2 bg-white rounded-md">lets work togather</button>
        </div>
        <div className="md:grid grid-cols-2 gap-5 mt-5 md:mt-o space-y-6">
            <img src={client1} alt="" className="rounded-md"/>
            <img src={client2} alt="" className="rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
