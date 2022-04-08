import React from 'react';

const SearchBox = () => {
  return (
    <div
      className="absolute w-[80%] h-[400px] max-w-[400px] sm:bottom-[5%] bottom-[1%] bg-[#000000] bg-opacity-[50%]
            border border-slate-300 rounded-xl shadow-xl sm:max-w-[600px] md:max-w-[70%] md:h-[250px] md:bottom-[13%]"
    >
      <div className="flex md:justify-start justify-center">
        <p className="relative text-white pt-4 md:pl-[9%] mb-[-12px] font-bold">
          How far is the bus
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-5 place-items-center md:flex md:flex-wrap md:justify-center md:gap-5 pt-10">
        <input
          className="md:w-[40%] px-5 h-[32px]"
          s
          type="text"
          placeholder="source"
        />
        <input
          className="md:w-[40%] px-5 h-[32px]"
          s
          type="text"
          placeholder="destination"
        />
        <input
          className="md:w-[40%] px-5 h-[32px]"
          s
          type="text"
          placeholder="your location"
        />
        <input
          className="md:w-[40%] px-5 h-[32px] bg-white"
          s
          type="text"
          placeholder="source"
        />
      </div>
      <div className="pt-5 flex md:justify-end justify-center md:pr-[9%]">
        <button className="bg-[#FFC107] border-none rounded-none h-[32px] w-[40%] md:w-[16%] ">
          Find Bus
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
