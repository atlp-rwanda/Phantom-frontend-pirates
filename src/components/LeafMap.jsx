import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { icon } from 'leaflet'

const center = { lat: -1.9431208545984047, lng: 30.057279438873277 }

const busStopData = [
    {
        location: 'Downtown Bus park',
        lat: -1.9431208545984047,
        lng: 30.057279438873277
    },
    {
        location: 'Nyabugogo Bus park',
        lat: -1.9405011634756917,
        lng: 30.04490505421663
    }
    ,
    {
        location: 'Kacyiru Bus Park',
        lat: -1.9363377719102153,
        lng: 30.081289227231704
    },
    {
        location: 'Remera Bus park',
        lat: -1.958411956926637,
        lng: 30.119027896544978
    }
]


const LeafMap = () => {
    const [map, setMap] = useState(null);
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
            <Marker position={center}>
                <Popup>
                Downtown Bus park
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LeafMap;