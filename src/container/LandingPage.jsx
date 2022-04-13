import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import { useGetPhantomQuery } from '../services/phantomApi';
import { Spinner } from '../components';
import { Navbar, SearchBox } from '../components';


const LandingPage = () => {
    const { data, error, isLoading } = useGetPhantomQuery();
    const [language, setLanguage] = useState('en');

    //set language in localstorage
    localStorage.setItem('language', language);

  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dmgfxu4fg/image/upload/v1649259188/WhatsApp_Image_2022-04-06_at_5.24.21_PM_mqnrhn.jpg')",
  };

  useEffect(() => {

}, [language])

    if (isLoading) {
    return <Spinner message='We are fetching your request' />
}
if (error) {
    return <h1>Oops, an error occured Or You are not Online</h1>;
}
if (data)
  return (
    <div className="md:w-full md:h-screen h-fit">
      <div
        style={myStyle}
        className="w-full h-full bg-no-repeat bg-cover bg-[#C4C4C4] absolute"
      >
        <Navbar />
      </div>
      <div className="max-w-[1240px] mx-auto text-black relative">
        <div className="py-24 md:px-[7%] px-[10%] md:py-44">
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl">
            MAKE YOUR TRANSPORT EASIER WITH PHANTOM
          </h1>
          <p className="pt-8 text-xl font-medium md:text-4xl sm:text-3xl text-white">
            At <span className="text-yellow-400">PHANTOM</span> we value your
            time.
          </p>
          <p className="text-xxl font-medium md:text-4xl sm:text-3xl text-white">
            Track how far is your bus and save you Time.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <SearchBox />
      </div>
    </div>
  );
};

export default withTranslation() (LandingPage);




/* const LandingPage = ({ t }) => {

    

    // change language function
    const changeLang = (e) => {
        setLanguage(e.target.value);
        window.location.reload();
    }
    useEffect(() => {

    }, [language])

    if (isLoading) {
        return <Spinner message='We are fetching your request' />
    }
    if (error) {
        return <h1>Oops, an error occured Or You are not Online</h1>;
    }
    if (data) {
        return ( */
   /*          <div>
                <span>from backend</span>
                <h1 className="text-3xl font-bold underline">
                    {data.message} 
                </h1>
                <div className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2'>
                </div>
                <span>from translation of i18</span>
                <h1 className="text-3xl font-bold underline">
                    {t('home')}
                </h1>
                <h1 className="text-3xl font-bold underline">
                {t('login')} 
                </h1>
                
                 <div className="px-10">
          <select
            value={language}
            onChange={(e) => changeLang(e) }
            className="bg-slate-300 opacity-[65%] font-bold"
            >
                <option value="" defaultValue={language}></option>
                <option value="en">ENG</option>
                <option value="rw">RW</option>
                <option value="fr">FR</option>
            </select>
        </div>
            </div>
        )
    }
}
 */