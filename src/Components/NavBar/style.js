import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    height: 6.5vh;
    padding: 1rem;
    display: flex;
    justify-content: ${ props => props.authUser ? "flex-end" : "flex-start" };
    align-items: center;
    font-family: ${props => props.theme.linkFont};
`

export const NavBarLink = styled(Link)`
    text-decoration: none;
    margin: 0 0.50rem;
`