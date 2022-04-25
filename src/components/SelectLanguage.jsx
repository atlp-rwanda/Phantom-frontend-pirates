import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

const SelectLanguage = ({ t }) => {
  const [language, setLanguage] = useState('en');
  //set language in localstorage
  localStorage.setItem('language', language);
 
  useEffect(() => {
    
    console.log(language);
    
  }, [language])

  /* const onSelect = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    window.location.reload();
  }; */

  const changeLang = (e) => {
    setLanguage(e.target.value);
    window.location.reload();
}
  

  return (
    <select
      value={language}
      onChange={(e) => changeLang(e)}
      className="bg-black bg-opacity-[0%] font-bold focus:outline-none hover:cursor-pointer text-xl"
    >
      <option
        className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
        value="en"
      >
        en
      </option>
      <option
        className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
        value="rw"
      >
        rw
      </option>
      <option
        className="font-bold bg-[#000000] bg-opacity-[50%] text-white hover:bg-gray-100"
        value="fr"
      >
        fr
      </option>
    </select>
  );
}

export default withTranslation()(SelectLanguage);
