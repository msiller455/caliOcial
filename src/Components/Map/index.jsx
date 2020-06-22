import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import { MapContainer, NavControl } from './style'

const Map = (props) => {
    const [ viewport, setViewport ] = useState({
        width: '100%',
        height: '100%',
        latitude: props.lat,
        longitude: props.long,
        zoom: 14
    })

    return (
        <MapContainer>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}>
                <NavControl>
                    <NavigationControl />
                </NavControl>
                <Marker latitude={props.lat} longitude={props.long}>
                    HELLO    
                </Marker> 
            </ReactMapGL>
        </MapContainer>
    );
};

export default Map;