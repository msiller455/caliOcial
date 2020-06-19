import React from 'react';
import { Link } from 'react-router-dom'
import { CleanUpsContainer, CleanUpsWindow, CleanUpsList } from '../style'

const CleanUps = (props) => {

    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>Clean Ups</h1>
                <CleanUpsList>
                    {
                        props.cleanUps.map(cleanUp => 
                        <Link to={`/cleanup/${cleanUp.cid}`}>
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