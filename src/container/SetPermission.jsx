import React, { useEffect, useState } from 'react';
import AssignPermCard from '../components/AssignPermCard';
import SlideBar from '../components/SlideBar';
import RoleCard from '../components/RoleCard';
import { getPermissions } from '../features/setPermission/setPermissionSlice';
import { useSelector } from 'react-redux';
import DeletePermCard from '../components/DeletePermCard';

function RoleSetPermission() {
  const permissions = useSelector(getPermissions);

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

        <div className="md:flex md:flex-row flex flex-col">
          <div className="w-full mr-4">
            <RoleCard />

            <AssignPermCard />

            <DeletePermCard />
          </div>
          <div className="md:w-[70%] w-full md:top-0 bottom-[10%]">
            <div class="p-6 bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="place-content-center">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden grid place-items-center">
                      <div className="w-10/12 flex justify-between">
                        <div>
                          <h2>Permission</h2>
                        </div>
                      </div>
                      <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  "></div>

                      {/* <PermissionTable /> */}

                      <>
                        <div
                          class={
                            permissions.length === 0
                              ? 'rounded-md p-4 w-10/12 mx-auto'
                              : 'hidden'
                          }
                        >
                          <div class="animate-pulse flex space-x-4">
                            <div class="flex-1 space-y-6 py-1">
                              <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                  <div class="h-8 bg-slate-100  col-span-1"></div>
                                  <div class="h-8 bg-slate-100  col-span-1"></div>
                                </div>
                              </div>
                              <div class="h-8 bg-slate-200 "></div>
                              <div class="h-8 bg-slate-100 "></div>
                              <div class="h-8 bg-slate-200 "></div>
                              <div class="h-8 bg-slate-100 "></div>
                              <div class="h-8 bg-slate-200 "></div>
                              <div class="h-8 bg-slate-100 "></div>
                              <div class="h-8 bg-slate-200 "></div>
                            </div>
                          </div>
                        </div>

                        <table class="w-10/12">
                          <thead class="bg-white border-b">
                            <tr
                              className={
                                permissions.length === 0 ? 'hidden' : ''
                              }
                            >
                              <th
                                scope="col"
                                class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Permission
                              </th>
                              <th
                                scope="col"
                                class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {permissions &&
                              permissions.map((permission, index) => (
                                <tr
                                  class="even:bg-white odd:bg-gray-100"
                                  key={index}
                                >
                                  <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {permission.perm_name}
                                  </td>
                                  <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSetPermission;
