import React from 'react';
import { Link } from 'react-router-dom'
import { CleanUpsContainer, CleanUpsWindow } from '../style'

const CleanUps = () => {
    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>Clean Ups</h1>

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