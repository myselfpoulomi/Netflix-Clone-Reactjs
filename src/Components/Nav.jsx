import React, { useEffect, useRef, useState } from "react";
import logo from "./../assets/logo.png";
import search_icon from "./../assets/search_icon.svg";
import bell_icon from "./../assets/bell_icon.svg";
import profile_img from "./../assets/profile_img.png";
import caret_icon from "./../assets/caret_icon.svg";
import { logout } from "../firebase";

function Nav() {
  const [toggle, settoggle] = useState(false);
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
        <img src={logo} alt="" className="w-[90px]" />
        <ul className="flex list-none gap-[20px] cursor-pointer">
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex gap-[20px] items-center">
        <img src={search_icon} alt="" className="w-[20px] cursor-pointer" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="w-[20px] cursor-pointer" />
        <div className="flex items-center gap-[10px] cursor-pointer relative  ">
          <img src={profile_img} alt="" className="rounded-[4px] w-[35px]" />
          <img
            onMouseEnter={() => {
              settoggle(true);
            }}
            src={caret_icon}
            alt=""
            className="w-[20px] cursor-pointer"
          />
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
