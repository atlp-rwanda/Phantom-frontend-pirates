import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import { NavHeader } from '../components/index';
import IconButton from '@mui/material/IconButton/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import { SpinnerCircular } from 'spinners-react';
import { withTranslation } from 'react-i18next';
import { Navbar } from '../components';

const Login = ({ t }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPasswordd: false,
  });

  const [validation, setValidation] = useState({
    email: '',
    password: '',
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPasswordd: !values.showPasswordd });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { email, password } = values;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/notification');
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    dispatch(reset());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let errors = validation;

    //email
    const emailCond =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
    } else {
      errors.password = '';
    }

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));

    return setValidation(errors);
  };
  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="h-full absolute">
          <Navbar />
        </div>
        <div className="flex-1 h-full max-w-6xl mx-auto rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="h-54 md:h-auto md:w-3/5">
              <img
                className="object-cover w-full h-full"
                src="https://res.cloudinary.com/basha18/image/upload/v1649243881/start-business_s2ezgi.png"
                alt="img"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-2/5 md:bg-cyan-700">
              <div className="w-full">
                <div className="flex justify-center mt-2"></div>
                <h1 className="mb-4 text-4xl md:text-white font-bold text-start">
                  {t('login.button')}
                </h1>
                <form onSubmit={onSubmit}>
                  <div className="bg-red-100 rounded-lg text-base text-red-700 mb-3">
                    {message && <h5 className="p-2">{message}</h5>}
                  </div>
                  <div className="flex rounded-md shadow-sm mt-8 mb-6">
                    <p className="h-6 w-6 mr-1 md:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                    <input
                      type="text"
                      className="w-full border-b-4 bg-transparent placeholder-gray-700  outline-none focus:outline-none md:text-white"
                      id="email"
                      name="email"
                      value={values.email}
                      placeholder="Enter your email"
                      required
                      onChange={handleChange('email')}
                    />
                  </div>
                  <div className="bg-red-100 rounded-lg text-base text-red-700 mb-3 mt-3">
                    <span className="">
                      {validation.email && (
                        <p className="p-2">{validation.email}</p>
                      )}
                    </span>
                  </div>
                  <div className="flex rounded-md shadow-sm">
                    <p className="h-6 w-6 mr-1 md:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </p>
                    <Input
                      className="w-full border-b-4 bg-transparent outline-none placeholder-gray-700 focus:outline-none md:text-white"
                      type={values.showPasswordd ? 'text' : 'password'}
                      onChange={handleChange('password')}
                      placeholder="Enter your password"
                      value={values.password}
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="bg-red-100 rounded-lg text-base text-red-700 mt-3">
                    <span className="">
                      {validation.password && (
                        <p className="p-2">{validation.password}</p>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-col-reverse md:flex-row items-baseline md:justify-between">
                    <div>
                      {isLoading ? (
                        <div className="mt-4">
                          <SpinnerCircular />
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="px-6 py-2 mt-4 text-white md:text-cyan-600 w-full bg-indigo-500 
                                      md:w-auto md:bg-white rounded-lg hover:bg-cyan-800"
                        >
                          {t('login.button')}
                        </button>
                      )}
                    </div>
                    <div className="w-full md:w-auto">
                      <a
                        href="#"
                        className="text-sm text-indigo-500 mt-3 md:text-white float-right justify-end hover:underline"
                      >
                        {t('login.forget')}
                      </a>
                    </div>
                  </div>
                </form>
                <div className="flex justify-between items-center md:mt-14">
                  <hr className="w-full" />{' '}
                  <span className="p-2 text-lg font-medium md:text-white mb-1">
                    {t('login.span')}
                  </span>
                  <hr className="w-full" />
                </div>
                <button
                  aria-label="Login with Google"
                  role="button"
                  className="focus:outline-none whitespace-nowrap focus:ring-2 focus:ring-offset-1
                             focus:ring-gray-700 py-2.5 px-6 border rounded-lg flex w-full mt-1 bg-gray-300 md:bg-white"
                >
                  <div className="w-1/5">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                      alt="google"
                    />
                  </div>
                  <div className="w-3/5">
                    <p className="text-lg font-medium ml-4 md:text-gray-700">
                      {t('login.google')}
                    </p>
                  </div>
                </button>
                <div className="flex items-baseline justify-center mt-6">
                  <p className="md:text-white mr-2">{t('login.new')}</p>
                  <a
                    href="#"
                    className="text-sm  text-cyan-700 md:text-black hover:underline mr-1"
                  >
                    {t('login.register')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withTranslation()(Login);
