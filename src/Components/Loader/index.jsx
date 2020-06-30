import React from 'react';
import { LdsRoller } from './style'

const Loader = (props) => {
    return (
        <LdsRoller color={props.color}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LdsRoller>
    );
};

export default Loader;