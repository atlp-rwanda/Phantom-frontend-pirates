import React, { useEffect, useState } from 'react';
import FindBUsButtonSpinner from '../components/FindBUsButtonSpinner';
import SlideBar from '../components/SlideBar';
import RoleCard from '../components/RoleCard';
import {
  fetchAsyncPermissions,
  fetchAsyncSetPermission,
  getPermissions,
  getRoles,
  getSuccess,
} from '../features/setPermission/setPermissionSlice';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

// import React from "react";
function RoleSetPermission() {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState();
  const [permission, setPermission] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const permissions = useSelector(getPermissions);
  const { isLoading } = useSelector((state) => state.rolesPermissions);

  const isSuccess = useSelector(getSuccess);
  const roles = useSelector(getRoles);
  const dispatch = useDispatch();

  // Swal.fire('Nice to meet you', '', 'success');

  const selectRole = (e) => {
    e.preventDefault();
    setRole(Number(e.target.value));
  };

  const selectPermission = (e) => {
    e.preventDefault();
    setPermission(Number(e.target.value));
  };

  const assignHundler = (permId, roleId) => {
    const url = 'api/permission/' + roleId + '/role/' + permId;
    dispatch(fetchAsyncSetPermission(url));
  };

  useEffect(() => {
    dispatch(fetchAsyncPermissions());
    if (isSuccess) {
      setShowModal(false);
      Swal.fire('permission is assigned successful', '', 'success');
    }
  }, [dispatch, isSuccess]);

  const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

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
            <>
              <div class="p-6  w-full bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="place-content-center">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden ">
                        <div className=" flex justify-center">
                          <h2>Assign Permission</h2>
                        </div>
                        <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  "></div>
                        <div className="flex justify-center">
                          <>
                            <button
                              className="bg-white text-black active:bg-cyan-700 border-none font-bold py-2 px-4 rounded inline-flex items-center"
                              type="button"
                              onClick={() => setShowModal(true)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Asign Permission
                            </button>
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-full my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                        <h1>ASSIGN PERMISSION</h1>

                                        <div className="flex pt-5 gap-8">
                                          <div>
                                            <select
                                              value={role}
                                              onChange={(e) => selectRole(e)}
                                              className="bg-black bg-opacity-[0%] font-bold focus:outline-none hover:cursor-pointer text-xl"
                                            >
                                              <option>select role</option>
                                              {roles &&
                                                roles.map((roled) => (
                                                  <option
                                                    className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                                                    value={roled.id}
                                                  >
                                                    {roled.role}
                                                  </option>
                                                ))}
                                            </select>
                                          </div>

                                          <div>
                                            <select
                                              value={permission}
                                              onChange={(e) =>
                                                selectPermission(e)
                                              }
                                              className="bg-black bg-opacity-[0%]  focus:outline-none focus:cursor-pointer text-xl"
                                            >
                                              <option>
                                                select a permission
                                              </option>
                                              {permissions &&
                                                permissions.map(
                                                  (permission, index) => (
                                                    <>
                                                      <option
                                                        className=" bg-[#000000] bg-opacity-[50%] text-white focus:bg-gray-100"
                                                        value={permission.id}
                                                        key={index}
                                                      >
                                                        {permission.perm_name}
                                                      </option>
                                                    </>
                                                  )
                                                )}
                                            </select>
                                          </div>
                                        </div>

                                        <div className="flex items-center justify-start w-full mt-8">
                                          {isLoading ? (
                                            <FindBUsButtonSpinner
                                              style={buttonSpinnerClass}
                                            />
                                          ) : (
                                            <button
                                              className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                              onClick={() =>
                                                assignHundler(role, permission)
                                              }
                                            >
                                              Assign Permission
                                            </button>
                                          )}
                                          <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                                            onclick="modalHandler()"
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                        <div
                                          className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                                          onclick="modalHandler()"
                                        >
                                          <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                          >
                                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0">
                                              x
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}
                          </>

                          <div className="flex"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="w-[70%]">
            <>
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
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSetPermission;
