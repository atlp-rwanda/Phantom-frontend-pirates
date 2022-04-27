import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../components/AddRouteModal'
import SlideBar from '../components/SlideBar'
import RouteTable from "../components/RouteTable";
import { SearchIcon } from "@heroicons/react/outline"
function Index() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    
    if (!(user && user.user.role === 'admin')) {
      navigate('/')
    }

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
                          <SearchIcon className='w-6 h-6 text-gray-600'/>
                      </button>
                      <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Index;