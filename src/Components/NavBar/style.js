import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    justify-content: space-between;
`

export const NavBarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 100;

    &:visted {
        color: #000;
    }
    &:hover {
        font-weight: 600;
    }
    &:active {
        color: rgb(53, 152, 206);
    }
`
export const NavLeft = styled.div`
    justify-self: left;
`
