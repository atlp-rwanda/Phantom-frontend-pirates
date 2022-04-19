import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import { NavHeader, Spinner } from '../components/index';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
      navigate('/notification')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }
  if (isLoading) {
    return <Spinner />
  }
    
    return (
        <>
          <div className="flex items-center min-h-screen">
            <div
                className="h-full absolute">
                <NavHeader />
            </div>
            <div className="flex-1 h-full max-w-6xl mx-auto rounded-lg">
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
                                
                            </div>
                            <div className="flex rounded-md shadow-sm mt-8 mb-6">
                                <p className="h-6 w-6 mr-1 md:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                                </svg>
                                </p>
                                <input
                                    type='email'
                                    className='w-full border-b-4 bg-transparent outline-none placeholder:bold focus:outline-none md:text-white'
                                    id='email'
                                    name='email'
                                    value={email}
                                    placeholder='Enter your email'
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                            </div>
                            <div className="flex rounded-md shadow-sm">
                                <p className="h-6 w-6 mr-1 md:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                     </svg>
                                </p>
                                <input
                                    type='password'
                                    className='w-full border-b-4 bg-transparent outline-none placeholder:bold md:text-white'
                                    id='password'
                                    name='password'
                                    value={password}
                                    placeholder='Enter password'
                                    onChange={onChange}
                                />
                                <div className="flex -mr-px">
                                    <span
                                        className="flex items-center leading-normal bg-transparent rounded rounded-l-none border-b-4 border-0 px-3 whitespace-no-wrap md:text-white"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    </span>    
                                </div>
                            </div>
                            <div>

                            </div>

                            <div className="flex flex-col-reverse md:flex-row items-baseline md:justify-between">
                                <div className='w-full md:w-auto'>
                                    <button type='submit' className='px-6 py-2 mt-4 text-white md:text-cyan-600 w-full bg-indigo-500 
                                      md:w-auto md:bg-white rounded-lg hover:bg-cyan-800'>
                                        Login
                                    </button>
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
