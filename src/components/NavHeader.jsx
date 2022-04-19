import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from '../images/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function NavHeader() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const [dropDownMenu, setUpDropDown] = useState(false);
  const [language, setLanguage] = useState('ENG');

  const handleClick = (e) => {
    e.preventDefault();
    setUpDropDown(!dropDownMenu);
  };

  return (
    <div className="w-screen h-[90px] z-10 border-b-2 border-button-color fixed">
      <div className="pl-[10%] flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full justify-between">
          <img src={logo} alt="/" className="w-36" />
          <div className="flex items-center">
            <div className="md:pr-[90px]">
              <ul className="hidden md:flex text-button-color font-semibold ">
                <li>
                    <Link to='/'>
                    <a
                    >Home</a
                    >
                    </Link>
                </li>
                <li>About</li>
                <li>Routes</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="hidden md:flex h-[30px] pr-[50px]">
                {user ? (
                  <button onClick={onLogout} className="w-[90px] border-white text-whte bg-red-700 hover:bg-button-color hover:text-white hover:border-none">
                  Log Out
                </button>
                ) : (
                  <>
                    <button className="w-[90px] border-yellow-400 text-yellow-400 bg-cyan-700 hover:bg-button-color hover:text-white hover:border-none">
                      Log In
                    </button>
                  </>
                )}
              <div className="px-10">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-slate-300 opacity-[65%] font-bold"
                >
                  <option value="ENG">ENG</option>
                  <option value="RW">RW</option>
                  <option value="FR">FR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!dropDownMenu ? (
              <MenuIcon className="w-10 text-yellow-400 font-bold mr-10 cursor-pointer" />
            ) : (
              <XIcon className="w-10 text-yellow-400 font-bold mr-10 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <ul
        className={
          !dropDownMenu
            ? 'hidden'
            : 'absolute ] w-full text-white font-bold bg-[#000000] bg-opacity-[50%]'
        }
      >
        <li className="border-y-2 border-zinc-300 w-full pl-9">Home</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">About</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">Routes Us</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">Contact Us</li>
        <div className="flex my-5 mx-9">
          <button className="h-[40px] w-full ">Sign In</button>
        </div>
      </ul>
    </div>
  );
}

export default NavHeader