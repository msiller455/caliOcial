import React from 'react';
import { useLocation } from 'react-router-dom'

const CleanUpDetail = () => {
    const cleanUp = useLocation().state.cleanUp

    return (
        <div>
            <h1>This is CleanUpDetail</h1>
        </div>
    );
};

export default CleanUpDetail;