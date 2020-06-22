import React from 'react';
import { useLocation } from 'react-router-dom'
import Map from '../../Map'
import {
    CleanUpsContainer,
    CleanUpsWindow
} from '../style'

const CleanUpDetail = () => {
    const cleanUp = useLocation().state.cleanUp
    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>{cleanUp.name}</h1>
                <p>{cleanUp.description}</p>
                <Map lat={cleanUp.beach.LATITUDE} long={cleanUp.beach.LONGITUDE} />
            </CleanUpsWindow>
        </CleanUpsContainer>
    )
}

export default CleanUpDetail;