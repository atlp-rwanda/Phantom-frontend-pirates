import React from "react";
const options = [
  {
    label: "Operator",
    value: "operator",
  },
  {
    label: "Driver",
    value: "Driver",
  },
];

const RegisterEmployees = () => {
  return (
    <div className=" w-11/12 flex justify-center items-center  bg-stone-100">
      <div className="flex flex-col bg-stone-300 p-20 px-40 rounded-md ">
        <h1 className="font-bold ml-16 mb-10">Register New Employee</h1>
        <label className="font-medium">Name</label>
        <input className="p-0.5 px-20  rounded-md " placeholder="Enter the name" />
        <label className="font-medium">Email</label>
        <input className="p-0.5 px-20 rounded-md" placeholder="Enter the email" />
        <label className="font-medium">Role</label>
        <select className="p-0.5 px-20 rounded-md">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="mt-8 ml-24">
          <button className="focus:outline-none flex jusitfy-center hover:text-white bg-white hover:bg-cyan-700 text-gray-600 rounded items-center p-3 ">
            <p className="text-base leading-4  px-4">Register</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployees;
