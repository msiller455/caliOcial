import React from 'react';
import { useLocation } from 'react-router-dom'
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

            </CleanUpsWindow>
        </CleanUpsContainer>
    )
}

export default CleanUpDetail;