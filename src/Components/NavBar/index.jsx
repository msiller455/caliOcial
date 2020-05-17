import React from 'react';
import { userLinks, authLinks } from '../../constants/navLinks'
import { NavContainer, NavBarLink } from './style'


const NavBar = (props) => {
    return (
        <NavContainer authUser={props.authUser}>
            {
                props.authUser
                ? userLinks.map((link, idx) => {
                    return [
                        <NavBarLink key={idx} to={link.path}>{link.text}</NavBarLink>,
                        idx !== userLinks.length - 1 ? " | " : ''
                    ]
                })
                :
                authLinks.map((link, idx) => {
                    return [
                        <NavBarLink className="link" key={idx} to={link.path}>{link.text}</NavBarLink>,
                        idx !== authLinks.length - 1 ? ' | ' : ''
                    ]
                })       
            }
        </NavContainer>
    );
};

export default NavBar;