import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import logo from '../images/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SelectLanguage from './SelectLanguage';
import { Link } from 'react-router-dom';

function Navbar({t}) {
  const [dropDownMenu, setUpDropDown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setUpDropDown(!dropDownMenu);
  };

  return (
    <div className="w-screen h-[90px] z-10  bg-[#000] bg-opacity-[12%] fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full justify-between">
          <img src={logo} alt="/" className="w-36 pl-10" />
          <div className="md:flex items-center">
            <div className="md:pr-[50px]">
              <ul className="hidden md:flex text-white font-semibold ">
              <li>{t('navbar.home')}</li>
                <li>{t('navbar.About')}</li>
                <li>{t('navbar.routes')}</li>
                <li className="whitespace-nowrap">{t('navbar.contact')}</li>
              </ul>
            </div>
            <div className="hidden md:flex h-[30px] pr-[70px]">
              <button className="w-[90px] border-button-color border-fon text-white bg-transparent hover:bg-button-color hover:text-white hover:border-none">
                <Link to='/login'>
                <a>{t('navbar.signIn')}</a>
                </Link>
              </button>
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
        <li className="border-y-2 border-zinc-300 w-full pl-9">{t('navbar.home')}</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">{t('navbar.About')}</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">{t('navbar.routes')}</li>
        <li className="border-b-2 border-zinc-300 w-full pl-9">{t('navbar.contact')}</li>
        <div>
          <div className="px-10 pt-8">
            <SelectLanguage />
          </div>
        </div>
        <div className="flex my-5 mx-9">
          <button className="h-[40px] w-full hover:bg-opacity-75">
          {t('navbar.signIn')}
          </button>
        </div>
      </ul>
    </div>
  );
}

export default withTranslation()(Navbar);
