import React from "react";
import Nav from "../Components/Nav";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../Components/TitleCards";
import Footer from "../Components/Footer";
import TitleCards2 from "../Components/TitleCards2";
import TitleCards5 from "../Components/TitleCards5";
import TitleCards3 from "../Components/TitleCards3";
import TitleCards4 from "../Components/TitleCards4";
function Home() {
  return (
    <div>
      <Nav />
      <div className="relative">
        <img
          src={hero_banner}
          alt=""
          className="w-[100%] mask-gradient-right h-[900px] object-cover"
        />
        <div className="absolute w-[100%] pl-[6%] bottom-0  ">
          <img
            src={hero_title}
            alt=""
            className="w-[90%] max-w-[420px] mb-[30px]"
          />
          <p className="max-w-[700px] text-[17px] mb-[20px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            dignissimos maxime illo.
          </p>
          <div className="flex gap-[10px] mb-[50px]">
            <button className="border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-bold bg-white rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf]">
              <img src={play_icon} alt="" className="w-[25px]" />
              Play
            </button>
            <button className="border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-bold bg-[#000000a9] rounded-[4px] cursor-pointer text-white hover:bg-[#121213]">
              <img src={info_icon} alt="" className="w-[25px]" />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="pl-[6%] ">
      <TitleCards2 />
      <TitleCards3/>
      <TitleCards4/>
     <TitleCards5/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
