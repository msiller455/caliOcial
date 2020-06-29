import React, { useContext } from 'react';
import { CleanUpsContext } from '../context'
import { Link } from 'react-router-dom'
import { CleanUpsContainer, CleanUpsWindow, CleanUpsList } from '../style'

const CleanUps = () => {
    const cleanUps = useContext(CleanUpsContext)
    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>Clean Ups</h1>
                <CleanUpsList>
                    {
                        cleanUps.map(cleanUp => 
                        <Link key={cleanUp.cid} to={{pathname: `/cleanups/${cleanUp.cid}`, state: {cleanUp}}}>
                            <div>
                                {cleanUp.name}
                            </div>
                            <div>
                                {new Date(cleanUp.dateTime).toDateString()}
                            </div>
                        </Link>)
                    }
                </CleanUpsList>
                <Link to='/newcleanup'>
                    <button>
                        Create New Clean Up
                    </button>
                </Link>
            </CleanUpsWindow>
        </CleanUpsContainer>
    );
};

export default CleanUps;