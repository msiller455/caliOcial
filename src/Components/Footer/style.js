import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 6.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    padding: 1rem;
`

export const Copyright = styled.div`
`

export const MediaLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const MediaLink = styled.a`
    text-decoration: none;
    margin: 0.25rem;

    &:visited {
        color: black;
    }
    &:hover {
        color: rgb(53, 152, 206);
    }
    
    &:active {
        color: rgb(53, 152, 206);
    }
`