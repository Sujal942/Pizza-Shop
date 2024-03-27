import React from "react";
import { FaCartShopping } from "react-icons/fa6";
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
          <a href="src/Components/MenuCard.js">
            <span>Menu</span>
          </a>
          <a href="src/Components/AboutPage.js">
            <span>About</span>
          </a>
          <a href="src/Components/ContactPage.js">
            <span>Contact</span>
          </a>
        </div>
        <div className="right gap-5 flex items-center">
          <FaCartShopping className="text-2xl" />
          <a href="/Users/sujaljain/Desktop/Pizza-Shop/src/Components/admin/AdminRegistrationPage.js">
            <button className="bg-yellow-400 p-3 rounded-xl ">
              Admin Login
            </button>
          </a>
          <a href="/Users/sujaljain/Desktop/Pizza-Shop/src/Components/user/UserRegister.js">
            <button className="bg-yellow-400 p-3 rounded-xl">User Login</button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
