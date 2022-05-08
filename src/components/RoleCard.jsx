import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncRoles,
  getRoles,
  getAssignedPermRole,
  fetchAsyncAssignedPerm,
  fetchAsyncCreateRole,
} from '../features/setPermission/setPermissionSlice';
import FindBUsButtonSpinner from './FindBUsButtonSpinner';
import Swal from 'sweetalert2';

const RoleCard = () => {
  const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('');

  const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

  const dispatch = useDispatch();
  const roles = useSelector(getRoles);
  const assignedPermRole = useSelector(getAssignedPermRole);

  const { isLoading, message, isSuccess, isRejected } = useSelector(
    (state) => state.rolesPermissions
  );

  const addRoleHundler = (roleName) => {
    dispatch(fetchAsyncCreateRole(roleName));
  };

  useEffect(() => {
    dispatch(fetchAsyncRoles());
    if (isSuccess) {
      setShowModal(false);
      Swal.fire(`${message}`, '', 'success');
    } else if (isRejected) {
      setShowModal(false);
      Swal.fire(`${message}`, '', 'error');
    }
  }, [dispatch]);

  return (
    <div class="p-6  w-full bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="place-content-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden grid place-items-center">
              <div className="w-10/12 flex justify-between">
                <div>
                  <h2>Roles</h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    {/* AddRoleModal  */}

                    <>
                      <button
                        className="bg-white text-black active:bg-cyan-700 border-none font-bold  px-4 rounded inline-flex items-center"
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
                        New Role
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-full my-6 mx-auto max-w-3xl">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                  <h1>ADD NEW ROLE</h1>
                                  <label
                                    for="exampleEmail0"
                                    class="form-label inline-block mb-2 text-gray-700"
                                  >
                                    Role
                                  </label>
                                  <input
                                    onChange={(e) => setRole(e.target.value)}
                                    type="text"
                                    class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                                    placeholder="Enter role name"
                                  />

                                  <div className="flex items-center justify-start w-full mt-8">
                                    {isLoading ? (
                                      <FindBUsButtonSpinner
                                        style={buttonSpinnerClass}
                                      />
                                    ) : (
                                      <button
                                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                        onClick={() => addRoleHundler('admin')}
                                      >
                                        Add Role
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
                  </div>
                </div>
              </div>
              <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  "></div>

              {/* role table */}

              <>
                <div
                  class={
                    roles.length === 0
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
                          <div class="h-8 bg-slate-100  col-span-1"></div>
                        </div>
                      </div>
                      <div class="h-8 bg-slate-200 "></div>
                      <div class="h-8 bg-slate-100 "></div>
                      <div class="h-8 bg-slate-200 "></div>
                    </div>
                  </div>
                </div>
                <table class="w-10/12">
                  <thead class="bg-white border-b">
                    <tr class={roles.length === 0 ? 'hidden' : ''}>
                      <th
                        scope="col"
                        class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Role
                      </th>
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
                    {roles &&
                      roles.map((role, index) => (
                        <tr
                          key={index}
                          class="odd:bg-gray-100 even:bg-white border-b"
                        >
                          <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {role.role}
                          </td>
                          <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div>
                              <select className="bg-black bg-opacity-[0%]  focus:outline-none focus:cursor-pointer text-xl">
                                <option>permissions</option>
                                {assignedPermRole &&
                                  assignedPermRole.map((permission, index) => (
                                    <>
                                      <option
                                        className=" bg-[#000000] bg-opacity-[50%] text-white focus:bg-gray-100"
                                        key={index}
                                      >
                                        create role
                                      </option>
                                    </>
                                  ))}
                              </select>
                            </div>
                          </td>
                          <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-black hover:bg-opacity-20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              onClick={() => alert('clicked')}
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
  );
};

export default RoleCard;
