import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from '../images/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SelectLanguage from './SelectLanguage';
import { withTranslation } from 'react-i18next';

function Navbar({t}) {
  const [active, setActive] = useState(true)
  const isNotActiveStyle = 'hover:text-cyan-700 text-white'
  const isActiveStyle = 'hover:text-white text-cyan-700'
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
    <div className="w-screen h-[90px] z-10  bg-[#000] bg-opacity-[12%] fixed drop-shadow-lg">
      <div className="flex-none justify-between items-center w-full h-full">
        <div className="flex items-center w-full justify-between">
          <img src={logo} alt="/" className="w-36 pl-10" />
          <div className="md:flex items-center">
            <div className="md:pr-[90px]">
              <ul className="hidden md:flex text-white font-semibold ">
                <li>
                  <Link  to='/'>
                    <a className='hover:text-cyan-700' 
                    >{t('navbar.home')}</a
                    >
                  </Link>
                </li>
                <li>
                  <Link to='/aboutus'>
                    <a className='hover:text-cyan-700 focus:outline-none'
                    >{t('navbar.About')}</a
                    >
                  </Link>
                </li>
                <li>{t('navbar.routes')}</li>
                <li className="whitespace-nowrap">
                  <Link to='/contactus'>
                    <a className='hover:text-cyan-700'
                    >{t('navbar.contact')}</a
                    >
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex h-[30px] pr-[70px]">
              {user ? (
              <button onClick={onLogout} className="w-[90px] border-button-color border-fon text-white bg-red-700 hover:bg-button-color hover:text-white hover:border-none">
                {t('navbar.signOut')}
              </button>
              ) : (
                <>
                <button className="w-[90px] border-button-color border-fon text-white bg-transparent hover:bg-button-color hover:text-white hover:border-none">
                <Link to='/login'>
                  <a>{t('navbar.signIn')}</a>
                </Link>
              </button>
                </>
              )}
              <div className="px-10">
                <SelectLanguage />
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
            : 'absolute md:hidden w-full text-white font-bold bg-[#000000] bg-opacity-[50%]'
        }
      >
        <li className="border-y-2 border-zinc-300 w-full pl-9">Home</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">About</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">Routes</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">Contact Us</li>
        <div>
          <div className="px-10 pt-8">
            <SelectLanguage />
          </div>
        </div>
        <div className="flex my-5 mx-9">
        {user ? (
          <button onClick={onLogout} className="h-[40px] w-full text-whte bg-red-700 hover:bg-opacity-75">
            {t('navbar.signOut')}
          </button>
          ) : (
            <button className="h-[40px] w-full hover:bg-opacity-75">
            <Link to='/login'>
              <a>{t('navbar.signIn')}</a>
            </Link>
          </button>
            )}
        </div>
      </ul>
    </div>
  );
}

export default withTranslation()(Navbar);
