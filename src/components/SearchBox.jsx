import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncViewBus } from '../features/viewBus/ViewBusSlice';
import { getViewBus } from '../features/viewBus/ViewBusSlice';
import ViewBus from './ViewBus';
import { useNavigate } from 'react-router-dom';
import FindBUsButtonSpinner from './FindBUsButtonSpinner';

const SearchBox = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const viewBusData = useSelector(getViewBus);
  const navigate = useNavigate();

  viewBusData.routeobject ? (
    viewBusData.routeobject.map(
      (bus, index) => (
        (<ViewBus key={index} data={bus} />), navigate('/viewBus')
      )
    )
  ) : (
    <div>
      <h3>{viewBusData.Error}</h3>
    </div>
  );

  const busData = {
    source,
    destination,
  };

  const handleClick = () => {
    setIsLoading(true);
    dispatch(fetchAsyncViewBus(busData));
    if (Object.keys(viewBusData).length != 0) setIsLoading(false);
  };

  return (
    <div
      className="absolute w-[80%] h-[400px] max-w-[400px] sm:bottom-[5%] bottom-[10%] bg-[#000000] bg-opacity-[50%]
            border border-slate-300 rounded-xl shadow-xl sm:max-w-[600px] md:max-w-[70%] md:h-[200px] md:bottom-[13%] "
    >
      <div className="flex md:justify-start justify-center ">
        <p className="relative text-white  pt-4 md:pl-[9%] mb-[-12px] font-bold italic mt-16 md:mt-0">
          How far is the bus
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-5 place-items-center md:flex md:flex-wrap md:justify-center md:gap-5 pt-10 italic">
        <input
          className="md:w-[40%] px-5 h-[32px] rounded-[5px] italic bg-white focus:bg-opacity-[50%] focus:outline-none focus:text-white focus:text-semibold"
          s
          type="text"
          placeholder="source"
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          className="md:w-[40%] px-5 h-[32px] rounded-[5px] italic bg-white focus:bg-opacity-[50%] focus:outline-none focus:text-white focus:text-semibold"
          s
          type="text"
          placeholder="destination"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="pt-5 flex md:justify-end justify-center md:pr-[9%]">
        {isLoading ? (
          <FindBUsButtonSpinner />
        ) : (
          <button
            className="bg-[#FFC107] border-none rounded-[5px] h-[32px] w-[40%] md:w-[16%] italic text-black font-bold hover:bg-opacity-[80%]"
            onClick={handleClick}
          >
            Find Bus
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
