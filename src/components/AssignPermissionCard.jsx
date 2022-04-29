import React, { useState } from 'react';

const AssignPermissionCard = () => {
  const [role, setRole] = useState('');

  const selectRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <div class="p-6  w-full bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="place-content-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden grid place-items-center">
              <div className="w-10/12 flex justify-between">
                <div>
                  <h2>Assign Permission</h2>
                </div>
                <div>
                  <div className="flex items-center justify-center"></div>
                </div>
              </div>
              <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  "></div>
              <div className="grid grid-cols-2">
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
                <div className="flex">
                  <div className="flex pt-2">
                    <div>
                      <select
                        value={role}
                        onChange={(e) => selectRole(e)}
                        className="bg-black bg-opacity-[0%] font-bold focus:outline-none hover:cursor-pointer text-xl"
                      >
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="role"
                        >
                          role
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="admin"
                        >
                          admin
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="operator"
                        >
                          operator
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="driver"
                        >
                          driver
                        </option>
                      </select>
                    </div>
                    <div>
                      <select
                        value={role}
                        onChange={(e) => selectRole(e)}
                        className="bg-black bg-opacity-[0%] font-bold focus:outline-none hover:cursor-pointer text-xl"
                      >
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="role"
                        >
                          Permissions
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="admin"
                        >
                          create role
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="operator"
                        >
                          update role
                        </option>
                        <option
                          className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
                          value="driver"
                        >
                          delete role
                        </option>
                      </select>
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
};

export default AssignPermissionCard;
