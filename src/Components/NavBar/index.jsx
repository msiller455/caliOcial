import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase'
import { AuthUserContext } from '../Session'
import { userLinks, authLinks } from '../../constants/navLinks'
import { NavContainer, NavBarLink } from './style'
import { useHistory } from 'react-router-dom'


const NavBar = (props) => {
    const firebase = useContext(FirebaseContext)
    const authUser = useContext(AuthUserContext)
    const history = useHistory()

    const signOut = () => firebase.signOut().then(() => history.push('/'))

    return (
        <NavContainer authUser={authUser}>
            {
                authUser
                ? [userLinks.map((link, idx) => {
                    return [
                        <NavBarLink key={idx} to={link.path}>{link.text}</NavBarLink>,
                        " | "
                    ]
                }), <NavBarLink key={"signOut"} to="#" onClick={signOut}>Sign Out</NavBarLink>]
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