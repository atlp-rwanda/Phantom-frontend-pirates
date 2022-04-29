import React from 'react';
import SlideBar from '../components/SlideBar';
import PermissionCard from '../components/PermissionCard';
import RoleCard from '../components/RoleCard';
import AssignPermissionCard from '../components/AssignPermissionCard';

// import React from "react";
function Index() {
  return (
    <div className="flex flex-no-wrap">
      <div className="w-64 sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
        <SlideBar />
      </div>

      <div className="container mx-auto py-10 bg-gray-100 h-auto md:w-4/5 w-11/12 px-6">
        <div class="flex justify-around">
          <div>
            <h2 className="text-lg text-cyan-700 font-bold">Admin Pannel</h2>
          </div>
          <div class="flex border-2 bg-white">
            <button class="flex items-center justify-center px-4 bg-white border-none">
              <svg
                class="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
            <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="h-[450px] w-full mr-4">
            <RoleCard />
            <AssignPermissionCard />
          </div>
          <div className="w-[70%]">
            <PermissionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
