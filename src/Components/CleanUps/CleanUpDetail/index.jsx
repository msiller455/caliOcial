import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase' 
import Map from '../../Map'
import {
    CleanUpsContainer,
    CleanUpsWindow
} from '../style'

const CleanUpDetail = () => {
    const cleanUp = useLocation().state.cleanUp
    const firebase = useContext(FirebaseContext)
    const [ createdBy, setCreatedBy ] = useState({})
    useEffect(() => {
        firebase.user(cleanUp.createdBy).once('value', snapshot => {
            setCreatedBy(snapshot.val())
        })
    }, [])


    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>{cleanUp.name}</h1>
                <p>{cleanUp.description}</p>
                <p>Hosted by: {createdBy.username}</p>
                <Map lat={cleanUp.beach.LATITUDE} long={cleanUp.beach.LONGITUDE} />
            </CleanUpsWindow>
        </CleanUpsContainer>
    )
}

export default CleanUpDetail;