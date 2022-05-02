import React, { useState } from "react";
import logo from "../images/logo.png";

function SlideBar() {
  return (
    <div
      id="Main"
      className={` bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72   flex-col h-full`}
    >
      <div>
        <img src={logo} alt="/" className="w-66 pl-10" />
      </div>
      <div className="xl:mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
        <div className=" relative focus:outline-none flex jusitfy-start w-full   text-gray-800 rounded  items-center border-gray-300 focus:border-gray-400 border  "></div>
        <button className="focus:outline-none flex jusitfy-start hover:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
          <img
            src="https://res.cloudinary.com/basha18/image/upload/v1652190001/home_w0j6n7.svg"
            alt="/"
            className="w-8"
          />
          <p className="text-base leading-4 ">Dashboard</p>
        </button>
        <button className="focus:outline-none flex jusitfy-start hover:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6">
          <img
            src="https://res.cloudinary.com/basha18/image/upload/v1652190001/bus-alt_eijyat.svg"
            alt="/"
            className="w-8"
          />
          <p className="text-base leading-4 ">Buses</p>
        </button>
        <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded  py-3 pl-4  w-full ">
          <img
            src="https://res.cloudinary.com/basha18/image/upload/v1652190588/user-group_b96btk.svg"
            alt="/"
            className="w-8"
          />
          <p className="text-base leading-4 ">Employees</p>
        </button>
        <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded py-3 pl-4  w-full ">
          <img
            src="https://res.cloudinary.com/basha18/image/upload/v1652190106/road_u6zkmx.svg"
            alt="/"
            className="w-8"
          />
          <p className="text-base leading-4  ">Routes</p>
        </button>
      </div>
      <div className="w-full px-4">
        <hr className=" border-gray-100 w-full" />
      </div>

      <div className="w-full px-4">
        <hr className=" border-gray-100 w-full" />
      </div>

      <div className="mt-36 flex  bg-white justify-start space-x-2 items-center h-full py-4 px-3.5    w-full  ">
        <div>
          <img src="https://i.ibb.co/fxrbS6p/Ellipse-2-2.png" alt="avatar" />
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <p className="cursor-pointer text-base leading-4 text-black">
            Alexis Enache
          </p>
          <p className="cursor-pointer text-xs leading-3 text-black">
            alexis _enache@gmail.com
          </p>
        </div>
        <button
          aria-label="visit"
          className=" focus:ring-2 focus:outline-none p-2.5 bg-white text-black border-none rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
      <div className="xl:mt-6 flex flex-col justify-start items-start  px-4 space-y-3 pb-5 ">
        <button className="focus:outline-none flex jusitfy-center hover:text-white bg-white hover:bg-cyan-700 text-gray-600 rounded p-3 items-center space-x-6 w-full ">
          <p className="text-base leading-4 ">Logout</p>
        </button>
      </div>
    </div>
  );
}

export default SlideBar;
