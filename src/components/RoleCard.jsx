import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncRoles,
  getRoles,
  getAssignedPermRole,
  fetchAsyncAssignedPerm,
  fetchAsyncCreateRole,
  clearAssignedPerm,
} from '../features/setPermission/setPermissionSlice';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/outline';
import AddRoleModal from './AddRoleModal';

const RoleCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPermModal, setShowPermModal] = useState(false);
  const [role_Id, setRole_Id] = useState();
  const [role_name, setRole_name] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [deleteModal, setdeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const dispatch = useDispatch();
  const roles = useSelector(getRoles);
  const rolePerm = useSelector(getAssignedPermRole);

  const { isLoading, message, isSuccess, isRejected } = useSelector(
    (state) => state.rolesPermissions
  );

  const addRoleHundler = (roleName) => {
    dispatch(fetchAsyncCreateRole(roleName));
  };

  const fetchPerm = (roleId, roleName) => {
    setShowPermModal(true);
    setRole_Id(roleId);
    setRole_name(roleName);
    dispatch(fetchAsyncAssignedPerm(roleId));
  };

  const clearAssignedState = () => {
    dispatch(clearAssignedPerm());
    setShowPermModal(false);
  };

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
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
  }, [dispatch, isSuccess, isRejected]);

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
                        <div>
                          <AddRoleModal
                            isLoading={isLoading}
                            addRoleHundler={addRoleHundler}
                            role_name={role_name}
                            setRole_name={setRole_name}
                            setShowModal={setShowModal}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
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
                              <p
                                className="cursor-pointer"
                                onClick={() => {
                                  fetchPerm(role.id, role.role);
                                }}
                              >
                                view permission
                              </p>
                              {/* open modal */}
                              {showPermModal ? (
                                <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative md:w-[40%] w-[80%] my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                        <h1 className="text-2xl text-cyan-700 font-bold">
                                          {role_name} Permissions
                                        </h1>

                                        {rolePerm[0] &&
                                          rolePerm[0].map((res) => (
                                            <div className="flex flex-row align-center ">
                                              <div>
                                                <CheckIcon className="w-5 text-green-700" />
                                              </div>
                                              <div>
                                                <p className="pd-[-5px] text-lg leading-loose ">
                                                  {res.perm_name}
                                                </p>
                                              </div>
                                            </div>
                                          ))}

                                        <div className="flex items-center justify-start w-full mt-8">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              clearAssignedState();
                                            }}
                                            className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                            onclick="modalHandler()"
                                          >
                                            Ok
                                          </button>
                                        </div>
                                        <div
                                          className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                                          onclick="modalHandler()"
                                        >
                                          <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => clearAssignedState()}
                                          >
                                            <span className="text-black opacity-7 h-6 w-6 text-3xl block bg-white py-0">
                                              x
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {/* close modal  */}
                            </div>
                          </td>
                          <td>
                            <Box sx={{ width: 90 }} className="w-4">
                              <Popper
                                open={open}
                                anchorEl={anchorEl}
                                placement={placement}
                                transition
                              >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                      <Typography sx={{ p: 2 }}>
                                        <div class="grid grid-cols-1 divide-y items-center p-4">
                                          <div>
                                            <p className="text-xl font-bold text-cyan-700">
                                              Actions
                                            </p>
                                            <p className="text-sm">
                                              Choose on of action
                                            </p>
                                          </div>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setUpdateModal(true);
                                            }}
                                            className="flex text-base bg-white border-none text-slate-600 p-1"
                                          >
                                            <PencilIcon className="w-5 h-5" />
                                            <p className="ml-4">Update</p>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setdeleteModal(true);
                                            }}
                                            className="flex bg-white border-none text-red-700 p-1"
                                          >
                                            <TrashIcon className="w-5 h-5 text-red-700" />
                                            <p className="text-slate-600 ml-4">
                                              Delete
                                            </p>
                                          </button>
                                        </div>
                                      </Typography>
                                    </Paper>
                                  </Fade>
                                )}
                              </Popper>
                              <Grid container justifyContent="center">
                                <Button onClick={handleClick('left-start')}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                  </svg>
                                </Button>
                              </Grid>
                            </Box>
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
