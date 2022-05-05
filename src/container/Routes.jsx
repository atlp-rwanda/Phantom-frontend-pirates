import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../components/AddRouteModal'
import SlideBar from '../components/SlideBar'
import RouteTable from "../components/RouteTable";

function Index() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    
    // if (!user) {
    //   navigate('/login')
    // }

  }, [user, navigate, dispatch])
  
    return (
        <div className="flex flex-no-wrap">
            <div className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
              <SlideBar />
            </div>
            
            <div className="container mx-auto py-10 bg-gray-100 h-auto md:w-4/5 w-11/12 px-6">
              <div className="flex justify-around">
                <div>
                  <h2 className="text-lg text-cyan-700 font-bold">Admin Pannel</h2>
                </div>
                <div className="flex border-2 bg-white">
                      <button className="flex items-center justify-center px-4 bg-white border-none">
                          <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                              </path>
                          </svg>
                      </button>
                      <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                  </div>
              </div>
              <div className="p-6 w-full bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="place-content-center">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden grid place-items-center">
                        <div className="w-10/12 flex justify-between">
                          <div>
                            <h2>Routes List</h2>
                          </div>
                          <div>
                          <div className="flex flex-col items-center justify-center">
                            <Modal />
                          </div>
                          </div>
                        </div>
                        <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  ">
                  
                       </div>
                        <RouteTable />
                      </div>
                      <div className=" w-11/12 flex justify-end">
                        <div>
                        <button className="flex jusitfy-center hover:text-white bg-white hover:bg-cyan-700 text-gray-600 rounded p-3 mt-6 items-center">
                            <p className="text-base leading-4 ">More</p>
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
        </div>
    );
}

export default Index;
