import React, { useState, useEffect, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../features/Employees/EmployeeSlice";
import FindBUsButtonSpinner from "./FindBUsButtonSpinner";

const options = [
  {label: "Select option",
   value: 0
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

const AddRouteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const firstRender = useRef(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState(null);
  const [firstnameError, setFirstnameError] = useState(null);
  const [lastnameError, setLastnameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const buttonSpinnerClass =
    "focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading,isError, isSuccess,message } = useSelector((state) => state.employees);


  const [disable, setDisabled] = useState(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (isSuccess) {
      setShowModal(false);
      navigate("/employees");
    }
    setDisabled(formValidation());
    dispatch(addEmployee);
  }, [
    firstname,
    lastname,
    email,
    option,isError, isSuccess, message, navigate],);

  const formValidation = () => {
    if (firstname === "") {
      setFirstnameError("Firstname field can't be blank!");
      return true;
    } else if (lastname === "") {
      setLastnameError("Lastname field can't be blank!");
      return true;
    } else if (email === "") {
      setEmailError("Email field can't be blank!");
      return true;
    }else {
      setFirstnameError(null);
      setLastnameError(null);
      setEmailError(null);
      return false;
    }
  };
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  const refreshPage = () =>{
    window.location.reload(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ firstname, lastname, email, option }));
    const employeeData = {
      firstname,
      lastname,
      email,
      option,
    };
    dispatch(addEmployee(employeeData))
    setIsLoading(true);
    setFirstname("");
    setLastname("");
    setEmail("");
    setOption("")
  };

  return (
    <>
      <button
        className="bg-white text-black active:bg-cyan-700 border-none font-bold py-2 px-4 rounded inline-flex items-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        New Employee
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <h1>REGISTER EMPLOYEE</h1>
                  <form onSubmit={onSubmit}>
                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      firstname
                    </label>
                    <input
                      type="text"
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
                      placeholder="Enter firstname"
                      name="firstname"
                      id="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    {firstnameError && (
                      <p className="text-rose-600">{firstnameError}</p>
                    )}

                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      lastname
                    </label>
                    <input
                      type="text"
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
                      placeholder="Enter lastname"
                      name="lastname"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    {lastnameError && (
                      <p className="text-rose-600">{lastnameError}</p>
                    )}
                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
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
                      placeholder="Enter Email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <p className="text-rose-600">{emailError}</p>
                    )}
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
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center justify-start w-full mt-8">
                      {isLoading ? (
                        <FindBUsButtonSpinner style={buttonSpinnerClass} />
                      ) : (
                        <button
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                          disabled={disable}
                          /* onClick={refreshPage} */
                        >
                          Register
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
    </>
  );
};

export default AddRouteModal;
