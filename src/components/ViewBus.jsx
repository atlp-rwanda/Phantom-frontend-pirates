import React from 'react';
import { useSelector } from 'react-redux';
import { getViewBus } from '../features/viewBus/ViewBusSlice';

const ViewBus = () => {
  const viewBusData = useSelector(getViewBus);
  console.log(viewBusData);
  return (
    <div>
      <h1>View Bus</h1>
      <div>
        <div>
          <h1>
            Bus:{' '}
            {viewBusData.routeobject.map((bus) =>
              bus.Buses.map((bus) => bus.plate)
            )}
          </h1>
          <h1>source: {viewBusData.routeobject.map((bus) => bus.source)}</h1>
          <h1>
            destiantion: {viewBusData.routeobject.map((bus) => bus.destination)}
          </h1>
          <h1>BusStops: {viewBusData.routeobject.map((bus) => bus.busStop)}</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewBus;
