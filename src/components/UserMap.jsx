import React, { useEffect, useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';

import { notifyInfo, notifySuccess } from '../utils/Notifications';
import LeafMap from './LeafMap';



const UserMap = ({ t }) => {

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [start, setStart] = useState(false);

  const originRef = useRef()
  const destinationRef = useRef();

  const calculateRoute = () => {
    /* if there is no input */
    if (originRef.current.value === 'Choose Source' || destinationRef.current.value === 'Choose Destination') {
      return notifyInfo('You have to select Source and Destination');
    }

    else if (originRef.current.value === destinationRef.current.value) {
      return notifyInfo('You have to select different Source and Destination');
    }

    else {
      //notifySuccess('We are tracing you route');
      setSource(originRef.current.value)
      setDestination(destinationRef.current.value)
    }

  }


  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  return (
    <section className="max-w-full md:w-5/6 mx-auto">

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ReactTooltip />
      {/* greeting part */}
      <div className="flex flex-col items-center m-10 space-y-4 text-center">
        <h1 className="text-3xl font-bold text-purple-900">User Navigation Map</h1>
        <p className="text-lg fold-semibold md:w-2/3">In this section you will get the bus real time location.
          <span>

            <Link to='/'
              className="px-6 py-2 text-sm font-semibold text-blue-800"
            >
              {t('notFound.link')}
            </Link>
          </span>
        </p>

      </div>

      <div className="relative overflow-hidden rounded-lg grid-cols-3 grid-rows-1 shadow-2xl  lg:pb-0 grid gap-1.5 md:grid-cols-3 h-auto">
        {/* Control section */}
        <div className=" p-6 bg-gray-100 rounded col-start-1">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-4xl">RAA 111 B</p>
            <p className="text-sm sm:text-base">Plate Number</p>
          </div>

          <div className="flex justify-start m-2">

            <div className="w-80">
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">
                Source
              </label>
              <select
                name="source"
                id="source"
                className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                ref={originRef}
              >
                <option defaultValue="" selected disabled>Choose Source</option>
                <option value="Downtown Bus park">Downtown Bus park</option>
                <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
                <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
                <option value="Remera Bus park">Remera Bus park</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start m-2">
            <div className="w-80">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <select
                name="destination"
                id="destination"
                className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                ref={destinationRef}
              >
                <option defaultValue="" selected disabled>Choose Destination</option>
                <option value="Downtown Bus park">Downtown Bus park</option>
                <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
                <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
                <option value="Remera Bus park">Remera Bus park</option>
              </select>
            </div>
          </div>


          <div className="flex justify-center space-x-3 m-3">

            <button
              className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              onClick={calculateRoute}
            >
              <span className="text-sm font-medium">
                Check Route
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          <div className="flex justify-start m-3 gap-2">
            <button
              data-tip="Move Bus"
              className="bg-yellow-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
              onClick={() => setStart(true)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </button>
            <button
              data-tip="Stop Bus"
              className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
              onClick={() => setStart(false)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </button>
          </div>
        </div>


        {/* Map section */}

        <div className="ml-auto text-center w-full col-span-2 row-span-3 col-start-2">
          <LeafMap 
            source={source} 
            destination={destination}
            start={start} 
          />
        </div>
      </div>

    </section >
  )
}

export default withTranslation()(UserMap);