import React from "react";
import logo2 from "./images/logo2.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" bg-[#e9dfdf] pr-5 flex justify-between text-xl items-center fixed w-full">
        <div className="left">
          <img
            src={logo2}
            className="w-[150px] rounded-full h-[100px] ml-[30px]"
            alt=""
          />
        </div>
        <div className="center gap-5 flex text-blue-800 font-light text-[25px]">
          <span>Menu</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="right gap-5 flex">
          <button className="bg-yellow-400 p-3 rounded-xl ">Admin Login</button>
          <button className="bg-yellow-400 p-3 rounded-xl">User Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
