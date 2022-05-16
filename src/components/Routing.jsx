import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import 'leaflet.animatedmarker/src/AnimatedMarker';
import bus from '../images/bus.png';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

var thisIcon = new L.Icon();
thisIcon.options.iconUrl = bus;

const Routing = ({ pointA, pointB, start }) => {
    const map = useMap();
    let results = '';

    useEffect(() => {
        if (!map) return;
        
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(pointA?.lat, pointA?.lng),
                L.latLng(pointB?.lat, pointB?.lng)
            ],
            lineOptions: {
                styles: [{ color: "#070978", weight: 6 }],
            },
            routeWhileDragging: true,
            show: false,
            addWaypoints: false,
            routeWhileDragging: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,

        }).addTo(map);

        
        routingControl.on('routeselected', (e) =>{
            let route = e.route;
            let coordinates = route.coordinates;
            results = Object.values(coordinates).map((value) => [value.lat, value.lng])

            if (results.length != 0){
    
                let line = L.polyline(results)
                let animatedMarker = L.animatedMarker(line.getLatLngs(), {
                    autoStart: false,
                    icon: thisIcon
                });
                if (start){
                    animatedMarker.start();
                }
                if (start=== false){
                    setTimeout(function() {
                        animatedMarker.stop();
                      }, 2000);
                }
                map.addLayer(animatedMarker); 
            }
        });
        

        
        return () => map.removeControl(routingControl);
    }, [map, pointA, pointB, results, start]);

    
    
    return null;
}

export default Routing