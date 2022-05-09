import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 004e0ebe6d3395a42f5e9914de4884f29db71c38
import {
  fetchAsyncEmployees,
  getEmployees,
} from "../features/Employees/EmployeeSlice";
<<<<<<< HEAD
import { updateEmployee } from "../features/Employees/EmployeeSlice";
=======
import { updateEmployee,deleteEmployee } from "../features/Employees/EmployeeSlice";
>>>>>>> 004e0ebe6d3395a42f5e9914de4884f29db71c38
import FindBUsButtonSpinner from "./FindBUsButtonSpinner";
const options = [
  {
    label: "select Role",
    value: 0,
  },
  {
    label: "Operator",
    value: 2,
  },
  {
    label: "Driver",
    value: 3,
  },
];

function EmployeesTable() {
  const [showModal, setShowModal] = useState(false);
  const firstRender = useRef(true);
  const [option, setOption] = useState(null);
  const [isLoading, setIsLoading]= useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const [employeeId, setEmployeeId] = useState(null);
  const [deleteModal,setdeleteModal] =useState(false)
 
   const navigate = useNavigate();
  const { employees } = useSelector(getEmployees);
  useEffect(() => {
  
    dispatch(fetchAsyncEmployees());
  }, [dispatch,navigate]);

  const buttonSpinnerClass =
    "focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]";

  const dispatch = useDispatch();

  const [disable, setDisabled] = useState(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    dispatch(updateEmployee);
  }, [option]);

  /* const handleChange = (e) => {
    setOption(e.target.value);
  }; */

  const onSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      option,
      employeeId,
    };
    console.log(option);
    dispatch(updateEmployee(employeeData));
    /* setIsLoading(true); */
    setOption(null);
  };
  const modal = () => {
    setShowModal(true);
    console.log(employee);
  };

  console.log(employeeId);
    setOption(null);
    setIsLoading(true);
    
  };
  const handleRemove = (e) => {
    e.preventDefault();
    const employeeData ={
      employeeId
    }
      if (isSuccess) {
        setShowModal(false);
        navigate("/employees");
      }
    dispatch(deleteEmployee(employeeData));
    
  };
  const refreshPage = () => {
    window.location.reload(false);
  };


  return (
    <div className="w-full">
      <>
        <div
          class={
            employees.length === 0 ? "rounded-md p-4 w-10/12 mx-auto" : "hidden"
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
            <tr class={employees.length === 0 ? "hidden" : ""}>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                firstname
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Role
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee, index) => (
                <tr
                  key={index}
                  className="even:bg-white odd:bg-gray-100 border-b"
                >
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {employee.firstname}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {employee.roleId === 1
                      ? "Admin"
                      : employee.roleId === 2
                      ? "Operator"
                      : "Driver"}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-black rounded-none border-transparent"
                      type="button"
                      onClick={() => {
                        setEmployeeId(employee.id);
                        setShowModal(true);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>

                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-full my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                <h1>UPDATE EMPLOYEE</h1>
                                <form onSubmit={onSubmit}>
                                  <label className="font-medium">Role</label>
                                  <select
                                    className="
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
                                    value={option}
                                    onChange={(e) => {
                                      setOption(e.target.value);
                                    }}
                                  >
                                    {options.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </select>

                                  <div className="flex items-center justify-start w-full mt-8">
                                    {isLoading ? (
                                      <FindBUsButtonSpinner
                                        style={buttonSpinnerClass}
                                      />
                                    ) : (
                                      <button
                                        type="submit"
                                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                        /* disabled={disable} */
                                        onClick={refreshPage}
                                      >
                                        Update
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
                                </form>
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
                    <button
                      onClick={() => {
                        setEmployeeId(employee.id);
                        setdeleteModal(true);
                      }}
                    >
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                  {deleteModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                              <h1>Delete EMPLOYEE</h1>
                              <form onSubmit={handleRemove}>
                                <p className="mt-2">
                                  {" "}
                                  Are you sure you want to delete this employee?
                                </p>

                                <div className="flex items-center justify-start w-full mt-8">
                                  {isLoading ? (
                                    <FindBUsButtonSpinner
                                      style={buttonSpinnerClass}
                                    />
                                  ) : (
                                    <button
                                      type="submit"
                                      className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                      /* disabled={disable} */
                                      onClick={() => handleRemove(employee.id) && {refreshPage}}
                                    >
                                      Yes I'm sure
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => setdeleteModal(false)}
                                    className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                                    onclick="modalHandler()"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                              <div
                                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                                onclick="modalHandler()"
                              >
                                <button
                                  className="bg-transparent border-0 text-black float-right"
                                  onClick={() => setdeleteModal(false)}
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
                </tr>
              ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default EmployeesTable;
