import React, { useState, useEffect } from 'react';

import { useGetPhantomQuery } from '../services/phantomApi';
import { Navbar, Spinner } from '../components';

const LandingPage = ({ t }) => {

    const { data, error, isLoading } = useGetPhantomQuery();
    const [language, setLanguage] = useState('en');

    //set language in localstorage
    localStorage.setItem('language', language);

    // change language function
    const changeLang = (e) => {
        setLanguage(e.target.value);
        window.location.reload();
    }
    useEffect(() => {

        console.log(language)
    }, [language])

    if (isLoading) {
        return <Spinner message='We are fetching your request' />
    }
    if (error) {
        return <h1>Oops, an error occured Or You are not Online</h1>;
    }
    if (data) {
        return (
            <div>
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

export default LandingPage;
