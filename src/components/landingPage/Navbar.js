import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import UserRegister from "../user/UserRegister";
import AdminRegistrationPage from "../admin/AdminRegistrationPage";
import { FaCartShopping } from "react-icons/fa6";
import logo2 from "./images/logo2.png";

const Navbar = () => {
  return (
    <div>
      <Router>
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
          <div className="right gap-5 flex items-center">
            <FaCartShopping className="text-2xl" />
            <Routes>
              <Route path="/User-Register" element={<UserRegister />} />
              <Route
                path="/Admin-Registration-Page"
                element={<AdminRegistrationPage />}
              />
            </Routes>
            <Link to="/User-Register" className="text-blue-400 relative">
              <button className="bg-yellow-400 p-3 rounded-xl">
                User Login
              </button>
            </Link>
            <Link
              to="/Admin-Registration-Page"
              className="text-blue-400 relative"
            >
              <button className="bg-yellow-400 p-3 rounded-xl ">
                Admin Login
              </button>
            </Link>
          </div>
        </nav>
      </Router>
    </div>
  );
};

export default Navbar;
