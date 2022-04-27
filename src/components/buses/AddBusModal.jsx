import React, { useState, useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { createBus, createBuses,reset,fetchAsyncBuses } from '../../features/buses/busSlice';
import { getCompanies,fetchAsyncCompanies } from '../../features/company/companySlice';
import FindBUsButtonSpinner from '../FindBUsButtonSpinner';
import Swal from 'sweetalert2';
 
const AddBusModal = () => {
 const [showModal, setShowModal] = useState(false);
 const firstRender = useRef(true);
 const [plate, setPlate] = useState('');
 const [category, setCategory] = useState('');
 const [seat, setSeat] = useState('');
 const [status, setStatus] = useState('');
 const [company, setCompany] = useState('');
 const [companyError, setCompanyError] = useState(null);
 const [plateError, setPlateError] = useState(null);
 const [categoryError, setCategoryError] = useState(null);
 const [seatError, setSeatError] = useState(null);
 const [statusError, setStatusError] = useState(null);
 const { companies } = useSelector(getCompanies);
 
 const buttonSpinnerClass =
   'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';
 
 const dispatch = useDispatch();
 const [disable, setDisabled] = useState(true);
 
 const { isLoading,isBSuccess, isRejected, message } = useSelector(
   (state) => state.buses
 )
 
 
 useEffect(() => {
   dispatch(fetchAsyncCompanies());
   if (firstRender.current) {
     firstRender.current = false;
     return;
   }
   if (isBSuccess) {
     setShowModal(false)
     Swal.fire(`${message.message}`, '', 'success');
     dispatch(fetchAsyncBuses());
     dispatch(reset())
   }else if (isRejected) {
     setShowModal(false);
     Swal.fire(`${message}`, '', 'error');
     dispatch(reset())
   }
   setDisabled(formValidation());
   dispatch(createBuses);
  
 }, [plate, category, seat,isBSuccess,isRejected]);
 
 const formValidation = () => {
   if (plate === '') {
     setPlateError('plate cant be blank!');
     return true;
   } else if (category === '') {
     setCategoryError('category can not be blank!');
     return true;
   }else if (seat === '') {
       setSeatError('seat cant be blank!');
       return true;
   }else {
     setPlateError(null);
     setCategoryError(null);
     setSeatError(null);
     return false;
   }
 };
 
 const onSubmit = (e) => {
   e.preventDefault();
   dispatch(createBus({ plate, category, seat, company}));
   setPlate('');
   setCategory('');
   setSeat('');
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
       New Bus
     </button>
     {showModal ? (
       <>
         <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
           <div className="relative w-full my-6 mx-auto max-w-3xl">
             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                 <h1>ADD NEW BUS</h1>
                 <form onSubmit={onSubmit}>
                   <label
                     for="plate"
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
                     placeholder="Enter Plate number"
                     name="plate"
                     id="plate"
                     value={plate}
                     onChange={(e) => setPlate(e.target.value)}
                   />
                   {plateError && (
                     <p className="text-rose-600">{plateError}</p>
                   )}
 
                   <label
                     for="category"
                     className="form-label inline-block mb-2 text-gray-700"
                   >
                     category
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
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                   >
                     <option value={null}>select category</option>
                       <option value='Coaster'>Coaster</option>
                       <option value='Yutong'>Yutong</option>
                   </select>
                   {categoryError && (
                     <p className="text-rose-600">{categoryError}</p>
                   )}
                   <label
                     for="seat"
                     className="form-label inline-block mb-2 text-gray-700"
                   >
                     Number of Seats
                   </label>
                   <input
                     type="number"
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
                     placeholder="Enter seat number"
                     name="seat"
                     id="seat"
                     value={seat}
                     onChange={(e) => setSeat(e.target.value)}
                   />
                   {seatError && (
                     <p className="text-rose-600">{seatError}</p>
                   )}
                   <label
                     for="company"
                     className="form-label inline-block mb-2 text-gray-700"
                   >
                     Company
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
                       value={company}
                       onChange={(e) => setCompany(e.target.value)}
                   >
                     <option value={null}>select company</option>
                     {companies.map((comp) => (
                       <option key={comp.id} value={comp.id}>
                         {comp.name}
                       </option>
                     ))}
                   </select>
                 
                   <div className="flex items-center justify-start w-full mt-8">
                      {isLoading ? (
                       <FindBUsButtonSpinner style={buttonSpinnerClass} />
                     ) : (
                       <button
                         type="submit"
                         className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                         disabled={disable}
                       >
                         Add Company
                       </button>
                      )}
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
 
export default AddBusModal;