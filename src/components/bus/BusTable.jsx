import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { fetchAsyncBuses,getBuses,updateBuses,deleteBus, reset } from '../../features/bus/busSlice';
import FindBUsButtonSpinner from "../FindBUsButtonSpinner";
import Swal from 'sweetalert2';

function CompanyTable() {
    const dispatch = useDispatch();

    const { buses } = useSelector(getBuses);

    const { isLoading,isSuccessBusDelete, isSuccess } = useSelector(
      (state) => state.buses
    )
    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [busId, setBusId] = useState(null);
    const [busPlate, setBusPlate] = useState(null);
    const [busCategory, setBusCategory] = useState(null);
    const [deleteModal,setdeleteModal] =useState(false);
    const [showModal, setShowModal] = useState(false);
    const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

    const handleClick = (newPlacement,id,plate,category) => (event) => {
      setBusId(id);
      setBusPlate(plate);
      setBusCategory(category);
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
    const handleRemove = (e) => {
      e.preventDefault();
      const busData = {
        busId,
      };
      dispatch(deleteBus(busData));
      setShowModal(false)
    };
    
    //update
    const onSubmit = (e) => {
      e.preventDefault();
      const busData = {
        busId,
        busPlate,
        busCategory
      };
      dispatch(updateBuses(busData));
      if(isSuccess)
      {
        Swal.fire('Successfully updated', '', 'success');
      }
      
    };
    
    

    useEffect(() => {
      
      if (isSuccessBusDelete) {
        setShowModal(false)
        Swal.fire('deleted', '', 'success');
        dispatch(reset())
      }
      dispatch(fetchAsyncBuses());
      }, [dispatch,isSuccess,isSuccessBusDelete]);
    
  return (
    <div className='w-full'>
      <>
            {isLoading ? (
                <div>
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
                ) : (
                <table class="w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Plate
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Category
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buses && 
                       buses.map((bus, index) => (
                        <tr key={index} className="even:bg-white odd:bg-gray-100  border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {bus.plate}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {bus.category}
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
                                  <Button onClick={handleClick('left-start', bus.id, bus.plate, bus.category)
                                  
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
                                <h1>UPDATE ROUTE <span className='text-xl font-bold'> {busPlate}</span></h1>
                                <form onSubmit={onSubmit}>
                                <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Plate number
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
                      placeholder="Enter plate number"
                      name="plate"
                      id="plate"
                      value={busPlate}
                      onChange={(e) => setBusPlate(e.target.value)}
                    />

                    <label
                      for="exampleEmail0"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Category
                    </label>
                    <select
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
                        value={busCategory}
                        onChange={(e) => setBusCategory(e.target.value)}
                    >
                      <option value={null}>select category</option>
                        <option value='Coaster'>Coaster</option>
                        <option value='Yutong'>Yutong</option>
                    </select>

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
                              <h1>Delete Company</h1>
                              <form onSubmit={handleRemove}>
                                <p className="mt-2">
                                  {" "}
                                  Are you sure you want to delete this Company <span className='text-xl font-bold'> {busPlate}</span>?
                                </p>
                                <div className="flex items-center justify-start w-full mt-8">
                                {isLoading ? (
                                  <FindBUsButtonSpinner style={buttonSpinnerClass} />
                                ) : (
                                    <button
                                      type="submit"
                                      className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                                    >
                                      Yes I'm sure
                                    </button>
                                    )}
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
                )}
              </>
        
    </div>
  )
}

export default CompanyTable