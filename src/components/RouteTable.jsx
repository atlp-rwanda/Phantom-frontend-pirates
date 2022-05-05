import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncRoutes,getRoutes } from '../features/Route/routeSlice';

function RouteTable() {
    const [route, setRoute] = useState('');
    const dispatch = useDispatch();

    const { routes } = useSelector(getRoutes);
    useEffect(() => {
        dispatch(fetchAsyncRoutes());
    }, [dispatch]);
    
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
                <table class="w-10/12">
                  <thead class="bg-white border-b">
                    <tr class={routes.length === 0 ? 'hidden' : ''}>
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
                        <tr key={index} className="bg-gray-100 border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {route.source}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {route.destination}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <p className='hidden'>{route.id}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </td>
                      </tr>
                      ))}
                  </tbody>
                </table>
              </>
        
    </div>
  )
}

export default RouteTable