import React, { useEffect, useRef, useState } from "react";
import logo from "./../assets/logo.png";
import search_icon from "./../assets/search_icon.svg";
import bell_icon from "./../assets/bell_icon.svg";
import profile_img from "./../assets/profile_img.png";
import caret_icon from "./../assets/caret_icon.svg";
import { logout } from "../firebase";
import { IoIosMenu } from "react-icons/io";

function Nav() {
  const [toggle, settoggle] = useState(false);
  const [menuItems, setmenuItems] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="w-[100%] py-[20px] px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] bg-custom-gradient z-10 "
    >
      <div className="flex items-center gap-[50px] ">
        <img src={logo} alt="" className="md:w-[90px] w-[80px]" />
        <ul className="md:flex list-none gap-[20px] cursor-pointer hidden ">
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex gap-[20px] items-center">
        <img
          src={search_icon}
          alt=""
          className="md:w-[20px] cursor-pointer w-[15px]"
        />
        <p className="hidden md:block">Children</p>
        <img
          src={bell_icon}
          alt=""
          className="md:w-[20px] cursor-pointer w-[15px]"
        />
        <div className="flex items-center gap-[10px] cursor-pointer relative  ">
          <img
            src={profile_img}
            alt=""
            className="rounded-[4px] md:w-[35px] w-[25px]"
          />
          <img
            onMouseEnter={() => {
              settoggle(true);
            }}
            onClick={() => {
              settoggle((prev) => !prev);
            }}
            src={caret_icon}
            alt=""
            className="md:w-[20px] cursor-pointer w-[15px]"
          />
          <IoIosMenu 
            className="text-[20px] md:hidden"
            onClick={() => {
              setmenuItems(prev=>!prev);
            }}
          />
          
            <div style={{right:menuItems?"0.75rem":"-10rem"}} className="md:hidden h-fit w-[30%] fixed top-14 bg-[#141414b0] items-center justify-center text-center py-5 rounded-[6px] transition-all ease-linear duration-200">
              <ul className="flex flex-col list-none gap-[20px] cursor-pointer  ">
                <li>Home</li>
                <li>TV Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
              </ul>
            </div>
          
          {toggle && (
            <div
              onMouseLeave={() => {
                settoggle(false);
              }}
              className="absolute top-[100%] right-0 w-max bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline  z-10"
            >
              <p
                onClick={() => {
                  logout();
                }}
                className="text-[13px] cursor-pointer"
              >
                Sign Out of Netflix
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
