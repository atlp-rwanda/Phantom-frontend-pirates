import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const Routing = ({ pointA, pointB }) => {
    const map = useMap();

    console.log('LatituteA', pointA?.lat)

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(pointA?.lat, pointA?.lng),
                L.latLng(pointB?.lat, pointB?.lng)
            ],
            lineOptions: {
                styles: [{ color: "#6FA1EC", weight: 4 }],
            },
            routeWhileDragging: true,
            show: true,
            addWaypoints: false,
            routeWhileDragging: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,

        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, pointA, pointB]);

    return null;
}

export default Routing