import React, { useEffect, useState } from 'react';
import {
  fetchAsyncPermissions,
  fetchAsyncSetPermission,
  getPermissions,
  getRoles,
  getSuccess,
  getRejected,
} from '../features/setPermission/setPermissionSlice';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import FindBUsButtonSpinner from './FindBUsButtonSpinner';

const AssignDeletePermCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState();
  const [permission, setPermission] = useState();

  const { isLoading, message, isRejected } = useSelector(
    (state) => state.rolesPermissions
  );

  const isSuccess = useSelector(getSuccess);
  const roles = useSelector(getRoles);
  const permissions = useSelector(getPermissions);
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
      Swal.fire(`${message}`, '', 'success');
      window.location.reload(true);
    } else if (isRejected) Swal.fire(`${message}`, '', 'error');
  }, [dispatch, isSuccess, isRejected]);

  const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

  return (
    <div>
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
                                      onChange={(e) => selectPermission(e)}
                                      className="bg-black bg-opacity-[0%]  focus:outline-none focus:cursor-pointer text-xl"
                                    >
                                      <option>select a permission</option>
                                      {permissions &&
                                        permissions.map((permission, index) => (
                                          <>
                                            <option
                                              className=" bg-[#000000] bg-opacity-[50%] text-white focus:bg-gray-100"
                                              value={permission.id}
                                              key={index}
                                            >
                                              {permission.perm_name}
                                            </option>
                                          </>
                                        ))}
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
    </div>
  );
};

export default AssignDeletePermCard;
