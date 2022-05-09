






import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createRoute, createRoutes } from '../features/Route/routeSlice';
import FindBUsButtonSpinner from './FindBUsButtonSpinner';

const AddRouteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const firstRender = useRef(true);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  //const [busStop, setBusStop] = useState([]);
  const [sourceError, setSourceError] = useState(null);
  const [destinationError, setDestinationError] = useState(null);
  const [distanceError, setDistanceError] = useState(null);
  const [inputList, setInputList] = useState([{busStop:""}]);

  const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

  const dispatch = useDispatch();

  const [disable, setDisabled] = useState(true);



  const handleChange = (index, e)=>{
    
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
}
  const addInputField = ()=>{
    setInputList([...inputList, {
        busStop:'',
    } ])
  }

  const removeInputFields = (index)=>{
    const rows = [...inputList];
    rows.splice(index, 1);
    setInputList(rows);
  }



  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(formValidation());
    dispatch(createRoutes);
  }, [source, destination, distance]);

  const formValidation = () => {
    if (source === '') {
      setSourceError('Source cant be blank!');
      console.log(source);
      return true;
    } else if (destination === '') {
      setDestinationError('Distance cant be blank!');
      return true;
    } else if (distance === '') {
      setDistanceError('Distance cant be blank!');
      return true;
    } else {
      setSourceError(null);
      setDestinationError(null);
      setDistanceError(null);
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createRoute({ source, destination, distance }));
    setIsLoading(true);
    setSource('');
    setDestination('');
    setDistance('');
    
  };

  return (
    <>
      <button
        className="bg-white text-black active:bg-cyan-700 border-none font-bold py-2 px-4 rounded inline-flex items-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        New Route
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <h1>ADD NEW ROUTE</h1>
                  <form onSubmit={onSubmit}>
                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Source
                    </label>
                    <input
                      type="text"
                      className="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                      placeholder="Enter source"
                      name="source"
                      id="source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                    />
                    {sourceError && (
                      <p className="text-rose-600">{sourceError}</p>
                    )}

                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Destination
                    </label>
                    <input
                      type="text"
                      className="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                      placeholder="Enter Destination"
                      name="destination"
                      id="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                    {destinationError && (
                      <p className="text-rose-600">{destinationError}</p>
                    )}
                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Distance
                    </label>
                    <input
                      type="text"
                      className="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                      placeholder="Enter Distance"
                      name="distance"
                      id="distance"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                    />
                    {distanceError && (
                      <p className="text-rose-600">{distanceError}</p>
                    )}
                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Bus Stop
                    </label>
                    <div className='flex flex-row'>
                      <div>
                      {
                        inputList.map((data, index)=>{
                            const {stop}= data;
                            return(
                              <div className="row my-3 flex flex-row" key={index}>
                                <div className="col">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="
                                              form-control
                                              block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white bg-clip-padding
                                              border border-solid border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                          "
                                      name="busstop"
                                      id="busstop"
                                      value={stop}
                                      onChange={(e)=>handleChange(index, e)} 
                                      placeholder="Enter Bus stop"
                                    />
                                  </div>
                                </div>
                              
                                <div className="w-1/12 ml-2.5">
                                  {(inputList.length!==1)? <button className="bg-white text-red-700 w-full border-none" onClick={removeInputFields}>x</button>:''}
                                </div>
                              </div>
                                        )
                            })
                        }
                      </div>
                      <div className="w-2/12">
                            <div className="col-sm-12">
                              <button className="mt-2.5 bg-white border-none" onClick={addInputField}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                            </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-full mt-8">
                      {/* {isLoading ? (
                        <FindBUsButtonSpinner style={buttonSpinnerClass} />
                      ) : ( */}
                        <button
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                          disabled={disable}
                        >
                          Add Route
                        </button>
                      {/* )} */}
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                        onclick="modalHandler()"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  <div
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                    onclick="modalHandler()"
                  >
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0">
                        x
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddRouteModal;