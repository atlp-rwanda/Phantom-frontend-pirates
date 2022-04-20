import React, { useState } from 'react';

function SelectLanguage() {
  const [language, setLanguage] = useState('en');
  const onSelect = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <select
      value={language}
      onChange={(e) => onSelect(e)}
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

export default SelectLanguage;
