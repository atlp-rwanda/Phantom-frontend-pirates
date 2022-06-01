import React, { useState, useEffect, useContext, useCallback } from 'react';
import { SocketContext } from '../context/socket';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import '../utils/Animated.marker';
import bus from '../images/bus.png';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 50],
    iconAnchor: [15, 40]
});

var thisIcon = new L.Icon({
    iconSize: [25, 25],
    iconAnchor: [12.5, 18.75]
});
thisIcon.options.iconUrl = bus;

const Routing = ({ pointA, pointB }) => {
    const map = useMap();
    const [start, setStart] = useState(false);
    const socket = useContext(SocketContext);

    let results = '';

    useEffect(() => {
        if (!map) return;
        socket.on('START', (data) => {
            setStart(true);
        });

        socket.on('PAUSE', (data) => {
            setStart(false);
            
        })

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(pointA?.lat, pointA?.lng),
                L.latLng(pointB?.lat, pointB?.lng)
            ],
            lineOptions: {
                styles: [{ color: "#070978", weight: 6 }],
            },
            show: true,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
            useZoomParameter: true

        }).addTo(map);


        routingControl.on('routeselected', (e) => {
            let route = e.route;
            let coordinates = route.coordinates;
            results = Object.values(coordinates).map((value) => [value.lat, value.lng])

            if (results.length != 0) {

                let line = L.polyline(results)
                let animatedMarker = L.animatedMarker(line.getLatLngs(), {
                    autoStart: false,
                    icon: thisIcon
                });
                if (start) {
                    animatedMarker.start();
                    socket.on('PAUSE', () => animatedMarker.pause())
                }
                if (!start ) {
                    animatedMarker.pause();
                    // listening to other events (ADD/REMOVE Passengers)
                }
                map.addLayer(animatedMarker);
            }
        });



        return () => map.removeControl(routingControl);
    }, [map, pointA, pointB, results, socket,start, setStart]);



    return null;
}

export default Routing