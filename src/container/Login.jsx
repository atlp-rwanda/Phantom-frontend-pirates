import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import { Navbar } from '../components/index';
import IconButton from "@mui/material/IconButton/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/outline"
import { SpinnerCircular } from 'spinners-react';

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPasswordd: false,
  });
  
  const [validation, setValidation] = useState({
    email: "",
    password: ""
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPasswordd: !values.showPasswordd });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { email, password } = values

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/routes')
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch(reset())
  };

  const onSubmit = (e) => {
    e.preventDefault()

    let errors = validation;
    
    //email
    const emailCond =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!values.email.match(emailCond)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = '';
    }
    //password validation
    const password = values.password;
    if (!password) {
      errors.password = 'password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be longer than 5 characters';
    }else {
      errors.password = '';
    }


    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
      
    return setValidation(errors);

  }
    return (
        <>
          <div className="flex items-start md:items-center lg:items-center xl:items-center min-h-screen">
            <div
                className="h-full absolute">
                <Navbar />
            </div>
            <div className="flex-1 h-full items-center max-w-6xl mx-auto rounded-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="h-54 md:h-auto md:w-3/5">
                        <img className="object-cover w-full h-full" src="https://res.cloudinary.com/basha18/image/upload/v1649243881/start-business_s2ezgi.png"
                            alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-2/5 md:bg-cyan-700">
                      <div className="w-full">
                        <div className="flex justify-center mt-2">
                            
                        </div>
                        <h1 className="mb-4 text-4xl md:text-white font-bold text-start">
                            Login
                        </h1>
                        <form onSubmit={onSubmit}>
                            <div className="bg-red-100 rounded-lg mb-4 text-base text-red-700 mb-3">
                                {message && 
                                <h5 className='p-2'>{message}</h5>
                                }
                            </div>
                            <div className="flex rounded-md shadow-sm mt-8 mb-6">
                                <AtSymbolIcon className="h-6 w-6 mr-1 md:text-white"/>
                                <input
                                    type='text'
                                    className='w-full border-b-4 bg-transparent placeholder-gray-700  outline-none focus:outline-none md:text-white'
                                    id='email'
                                    name='email'
                                    value={values.email}
                                    placeholder='Enter your email' required
                                    onChange={handleChange("email")}
                                />
                            </div>
                            <div className="bg-red-100 rounded-lg text-base text-red-700 mb-3 mt-3">
                                <span className=''>{validation.email && <p className='p-2'>{validation.email}</p>}</span>
                            </div>
                            <div className="flex rounded-md shadow-sm">
                                <LockClosedIcon className="h-6 w-6 mr-1 md:text-white"/>
                                <Input 
                                  className='w-full border-b-4 bg-transparent outline-none placeholder-gray-700 focus:outline-none md:text-white'
                                  type={values.showPasswordd ? "text" : "password"}
                                  onChange={handleChange("password")}
                                  placeholder='Enter your password'
                                  value={values.password} required 
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                      >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                            </div>
                            <div className="bg-red-100 rounded-lg text-base text-red-700 mt-3">
                                <span className=''>{validation.password && <p className='p-2'>{validation.password}</p>}</span>
                            </div>

                            <div className="flex flex-col-reverse md:flex-row items-baseline md:justify-between">
                                <div>
                                  {isLoading ? (
                                    <div className='mt-4'>
                                      <SpinnerCircular />
                                    </div>
                                  ): (
                                    <button type='submit' className='px-6 py-2 mt-4 text-white md:text-cyan-600 w-full bg-indigo-500 
                                      md:w-auto md:bg-white rounded-lg hover:bg-cyan-800'>
                                        Login
                                    </button>
                                  )}
                                </div>
                                <div className='w-full md:w-auto'>
                                    <a href="#" className="text-sm text-indigo-500 mt-3 md:text-white float-right justify-end hover:underline">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                            <div className="flex justify-between items-center md:mt-14">
                              <hr className="w-full"/> <span className="p-2 text-lg font-medium md:text-white mb-1">OR</span>
                              <hr className="w-full"/>
                            </div>
                            <button aria-label="Login with Google" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1
                             focus:ring-gray-700 py-2.5 px-6 border rounded-lg flex w-full mt-1 bg-gray-300 md:bg-white">
                                 <div className='w-1/5'>
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google"/>
                                 </div>
                                <div className='w-3/5'>
                                <p className="text-lg font-medium ml-4 md:text-gray-700">Login with Google</p>
                                </div>
                            </button>
                            <div className="flex items-baseline justify-center mt-6">
                                <p className='md:text-white mr-2'>New to Phantom?</p>
                                   <a href="#" className="text-sm  text-cyan-700 md:text-black hover:underline mr-1">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
          </div>      
        </> 
    );
}
export default Login