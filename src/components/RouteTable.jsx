import React, { useEffect, useRef, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { fetchAsyncRoutes,getRoutes,updateRoute,deleteRoute } from '../features/Route/routeSlice';
import FindBUsButtonSpinner from "./FindBUsButtonSpinner";
import Swal from 'sweetalert2';

function RouteTable() {
    const [route, setRoute] = useState('');
    const dispatch = useDispatch();

    const { routes } = useSelector(getRoutes);

    const { isSuccessDelete,isLoading,status, isSuccess } = useSelector(
      (state) => state.routes
    )
    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [routeId, setRouteId] = useState(null);
    const [routeSource, setRouteSource] = useState(null);
    const [routeDestination, setRouteDestination] = useState(null);
    const [routeDistance, setRouteDistance] = useState(null);
    const [routeBusStop, setRouteBusStop] = useState(null);
    const [deleteModal,setdeleteModal] =useState(false);
    const [showModal, setShowModal] = useState(false);
    const [inputList, setInputList] = useState([{busStop:""}]);
    const idRoute = useRef();

    const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

    const handleClick = (newPlacement,id,source,destination,distance,busStop) => (event) => {
      setRouteId(id);
      setRouteSource(source);
      setRouteDestination(destination);
      setRouteDistance(distance);
      setRouteBusStop(busStop);
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
    const handleRemove = (e) => {
      e.preventDefault();
      const routeData = {
        routeId,
      };
      dispatch(deleteRoute(routeData));
      
      if (status !== "loading") {
        setTimeout(() => {
          setShowModal(false);
          window.location.reload(false);
        }, 2000);
      }
    };
    const handleChange = (index, e)=>{
    
      const { value } = e.target;
      const list = [...inputList];
      list[index] = value;
      setInputList(list);
  }
    const addInputField = (e)=>{
      e.preventDefault();
      setInputList([...inputList, {
          busStop:'',
      } ])
    }
  
    const removeInputFields = (index)=>{
      const rows = [...inputList];
      rows.splice(index, 1);
      setInputList(rows);
    }
    //update
    const onSubmit = (e) => {
      e.preventDefault();
      const routeData = {
        routeId,
        routeSource,
        routeDestination, 
        routeDistance,
        routeBusStop
      };
      dispatch(updateRoute(routeData));
      if(isSuccess)
      {
        Swal.fire('Successfully updated', '', 'success');
      }
      
    };
    const refreshPage = () => {
      if(status !== 'loading'){
        Swal.fire(`${message.message}`, '', 'success');
        setTimeout(()=>{
           setShowModal(false);
           Swal.fire(`${message.message}`, '', 'success');
           window.location.reload(false);
         
        },2000)
        
      }
      
    };
    

    useEffect(() => {
      if (isSuccess) {
        
      }
        dispatch(fetchAsyncRoutes());
    }, [dispatch,isSuccess]);
    
  return (
    <div className='w-full'>
      <>
                <div
                  class={
                    routes.length === 0
                      ? 'rounded-md p-4 w-10/12 mx-auto'
                      : 'hidden'
                  }
                >
                  <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-8 bg-slate-100  col-span-1"></div>
                          <div class="h-8 bg-slate-100  col-span-1"></div>
                          <div class="h-8 bg-slate-100  col-span-1"></div>
                        </div>
                      </div>
                      <div class="h-8 bg-slate-200 "></div>
                      <div class="h-8 bg-slate-100 "></div>
                      <div class="h-8 bg-slate-200 "></div>
                    </div>
                  </div>
                </div>
                <table class="w-full">
                  <thead class="bg-white border-b">
                    <tr class={routes.length === 0 ? "hidden" : ""}>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Source
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Destination
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.routeobject && 
                       routes.routeobject.map((route, index) => (
                        <tr key={index} className="even:bg-white odd:bg-gray-100  border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {route.source}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {route.destination}
                        </td>
                        <td>
                          <Box sx={{ width: 90 }} className='w-4'>
                              <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                      <Typography sx={{ p: 2 }}>
                                      <div class="grid grid-cols-1 divide-y items-center p-4">
                                        <div>
                                          <p className='text-xl font-bold text-cyan-700'>Actions</p>
                                          <p className='text-sm'>Choose on of action</p>
                                        </div>
                                          <button type='button' onClick={() => {
                                              setShowModal(true);
                                            }} className='flex text-base bg-white border-none text-slate-600 p-1'>
                                            <PencilIcon className='w-5 h-5'/>
                                            <p className='ml-4'>Update</p>
                                          </button>
                                        <button type='button' onClick={() => {
                                                    setdeleteModal(true);
                                                  }} className='flex bg-white border-none text-red-700 p-1'>
                                          <TrashIcon className='w-5 h-5 text-red-700'/>
                                          <p className='text-slate-600 ml-4'>Delete</p>
                                        </button>
                                      </div>
                                      </Typography>
                                    </Paper>
                                  </Fade>
                                )}
                              </Popper>
                              <Grid container justifyContent="center">
                                  <Button onClick={handleClick('left-start', route.id, route.source, route.destination, route.distance,route.busStop)
                                  
                                } >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                  </Button>
                              </Grid>  
                            </Box>
                        </td>
                        {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-25 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-full my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                <h1>UPDATE ROUTE <span className='text-xl font-bold'> {routeSource}-{routeDestination}</span></h1>
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
                      value={routeSource}
                      onChange={(e) => setRouteSource(e.target.value)}
                    />

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
                      value={routeDestination}
                      onChange={(e) => setRouteDestination(e.target.value)}
                    />
                    
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
                      value={routeDistance}
                      onChange={(e) => setRouteDistance(Number(e.target.value))}
                    />
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
                                      name="busStop"
                                      id="busstop"
                                      value={routeBusStop}
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
                              <button className="mt-2.5 bg-white border-none" onClick={(e)=>addInputField(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                            </div>
                      </div>
                    </div>

                                  <div className="flex items-center justify-start w-full mt-8">
                                    {isLoading ? (
                                      <FindBUsButtonSpinner
                                        style={buttonSpinnerClass}
                                      />
                                    ) : (
                                      <button
                                        type="submit"
                                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                        
                                      >
                                        Update
                                      </button>
                                    )}
                                    <button
                                      type="button"
                                      onClick={() => setShowModal(false)}
                                      className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                                      /* onclick="modalHandler()" */
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
                        {deleteModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-25 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                              <h1>Delete Route</h1>
                              <form onSubmit={handleRemove}>
                                <p className="mt-2">
                                  {" "}
                                  Are you sure you want to delete this Route <span className='text-xl font-bold'> {routeSource}-{routeDestination}</span>?
                                </p>
                                <div className="flex items-center justify-start w-full mt-8">
                                    <button
                                      type="submit"
                                      className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                      /* disabled={disable} */
                                    >
                                      Yes I'm sure
                                    </button>
                                  <button
                                    type="button"
                                    className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                                    onClick={() => setdeleteModal(false)}
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
                                  onClick={() => setdeleteModal(false)}
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
                      </tr>
                      
                      ))}
                  </tbody>
                </table>
              </>
        
    </div>
  )
}

export default RouteTable