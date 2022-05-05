import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
const options = [
  {
    label: "Operator",
    value: 2,
  },
  {
    label: "Driver",
    value: 3,
  },
];

const RegisterEmployees = () => {
    
        const [firstname,setfirstname]= useState('')
        const [lastname,setlastname]= useState('')
        const [email,setEmail] = useState('')
        const [option,setOption]= useState(null)
        const dispatch = useDispatch()
        const navigate= useNavigate()
        const {user, isLoading, isSuccess, message, isError} =useSelector(state => state.auth)
        useEffect(()=>{
            if (isError){
                console.log(isError)
            }
            if(isSuccess || user){
                navigate("/")
            }
            dispatch(reset())

        }, [user,isError,isSuccess,message,navigate,dispatch])
        const handleChange = (e) =>{
        setOption(e.target.value)
        }

        const onSubmit = (e) =>{
            e.preventDefault()
            console.log(option)
            if((firstname || lastname || email) === null){
                console.log("Fields can not be empty")
            }else{
                const userData= {
                    firstname,
                    lastname,
                    email,
                    option,
                }
                dispatch(register(userData))
            }
        }

  return (
    <div className=" w-11/12 flex justify-center items-center  bg-stone-100">
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-stone-300 p-20 px-40 rounded-md "
      >
        <h1 className="font-bold ml-16 mb-10">Register New Employee</h1>
        <label className="font-medium">firstname</label>
        <input
          type="text"
          className="p-0.5 px-20  rounded-md "
          id="name"
          value={firstname}
          placeholder="Enter the first name"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <label className="font-medium">lastname</label>
        <input
          type="text"
          className="p-0.5 px-20  rounded-md "
          id="name"
          value={lastname}
          placeholder="Enter the last name"
          onChange={(e) => setlastname(e.target.value)}
        />
        <label className="font-medium">Email</label>
        <input
          type="email"
          className="p-0.5 px-20 rounded-md"
          id="email"
          value={email}
          placeholder="Enter the email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-medium">Role</label>
        <select
          className="p-0.5 px-20 rounded-md"
          value={option}
          onChange={handleChange}
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
        <div className="mt-8 ml-24">
          <button
            type="submit"
            className="focus:outline-none flex jusitfy-center hover:text-white bg-white hover:bg-cyan-700 text-gray-600 rounded items-center p-3 "
          >
            <p className="text-base leading-4  px-4">Register</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterEmployees;
