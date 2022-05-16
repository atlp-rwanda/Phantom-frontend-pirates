import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import Routing from './Routing';

const center = { lat: -1.9431208545984047, lng: 30.057279438873277 }

const busStopData = {
    'Downtown Bus park': {
        name: 'Downtown Bus park',
        lat: -1.9431208545984047,
        lng: 30.057279438873277
    },
    'Nyabugogo Bus park': {
        name: 'Nyabugogo Bus park',
        lat: -1.9405011634756917,
        lng: 30.04490505421663
    }
    ,
    'Kacyiru Bus Park': {
        name: 'Kacyiru Bus Park',
        lat: -1.9363377719102153,
        lng: 30.081289227231704
    },
    'Remera Bus park': {
        name: 'Remera Bus park',
        lat: -1.958411956926637,
        lng: 30.119027896544978
    }
}

const LeafMap = ({ source, destination, start }) => {
    const [map, setMap] = useState(null);
    const [pointA, setPointA] = useState('');
    const [pointB, setPointB] = useState('');
    useEffect(() => {

      setPointA(busStopData[source])
      setPointB(busStopData[destination])

    }, [source, destination])
    
    return (
        <MapContainer
            center={center}
            zoom={15}
            style={{ width: "100%", height: "100vh" }}
            whenCreated={setMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Routing 
                pointA={pointA} 
                pointB={pointB}
                start={start}
            />
            {/* <RoutingMachine 
                pointA={pointA} 
                pointB={pointB}
                /> */}
        </MapContainer>
    )
}

export default LeafMap;