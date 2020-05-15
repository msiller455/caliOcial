import React from 'react';
import { userLinks, authLinks } from '../../constants/navLinks'
import { NavContainer, NavBarLink, NavLeft } from './style'


const NavBar = (props) => {
    return (
        <NavContainer>
            {
                props.authUser
                    ? userLinks.map((link, idx) => {
                        return (
                            [
                                <NavBarLink key={idx} to={link.path}>{link.text}</NavBarLink>,
                                idx !== userLinks.length-1
                                ? " | " : ''
                            ]
                        )
                    }
                    )
                    :
                    <NavLeft>
                        {authLinks.map((link, idx) => {
                            return [
                                <NavBarLink className="link" key={idx} to={link.path}>{link.text}</NavBarLink>,
                                idx !== authLinks.length -1 ? ' | ' : ''
                            ]
                        })}
                    </NavLeft>
                        
            }
        </NavContainer>
    );
};

export default NavBar;