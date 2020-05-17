import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    height: 6.5vh;
    padding: 1rem;
    display: flex;
    justify-content: ${ props => props.authUser ? "flex-end" : "flex-start" };
    align-items: center;
    font-family: 'Varela Round', sans-serif;
`

export const NavBarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    margin: 0 0.50rem;

    &:visted {
        color: #000;
    }
    
    &:hover {
        color: rgb(53, 152, 206);
    }
    
    &:active {
        color: rgb(53, 152, 206);
    }
    
`