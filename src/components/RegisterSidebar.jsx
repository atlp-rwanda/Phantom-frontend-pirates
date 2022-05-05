import React, { useState } from "react";
import logo from "../images/logo.png";

function RegisterSidebar() {
  return (
    <div
      id="Main"
      className={` bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-72   flex-col h-full`}
    >
      <div>
        <img src={logo} alt="/" className="w-66 pl-10" />
      </div>
      <div className="xl:mt-40 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5">
        <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded  py-3 pl-4  w-full ">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <p className="text-base leading-4 ml-2 ">Permissions</p>
          </div>
        </button>
        <button className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white bg-white border-none hover:bg-cyan-700 text-gray-600 rounded py-3 pl-4  w-full ">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-base leading-4 ml-2  ">Employees</p>
          </div>
        </button>
      </div>
      <div className="w-full px-4">
        <hr className=" border-gray-100 w-full" />
      </div>

      <div className="w-full ">
        <hr className=" border-black w-full" />
      </div>

      <div className="mt-36 flex  bg-white justify-start space-x-2 items-center h-full py-4 px-3.5 w-full ">
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
            class="h-6 w-6"
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

export default RegisterSidebar;
