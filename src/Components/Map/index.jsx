import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons' 
import { MapContainer, NavControl } from './style'
import {theme} from '../../constants/theme'

const Map = (props) => {
    const [ viewport, setViewport ] = useState({
        width: '100%',
        height: '100%',
        latitude: props.lat,
        longitude: props.long,
        zoom: 14
    })
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <MapContainer>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API} onViewportChange={(viewport) => setViewport(viewport)}>
                <NavControl>
                    <NavigationControl />
                </NavControl>
                <Marker latitude={props.lat} longitude={props.long}>
                     <FontAwesomeIcon 
                        icon={faMapMarker}
                        size="1x"
                        style={{transition: "all 0.25s"}}
                        color={isHovered ? theme.hoverColor : '#000'}
                        onMouseOver={()=> setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                     />
                </Marker> 
            </ReactMapGL>
        </MapContainer>
    );
};

export default Map;