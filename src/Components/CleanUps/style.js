import styled from 'styled-components'
import cleanUpImg from '../../resources/images/beach-sunrise.png'

export const CleanUpsContainer = styled.div`
    background-image: url(${cleanUpImg});
    background-size: cover;
    background-position: center;
    height: 87vh;
    font-family: ${props => props.theme.primaryFont};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CleanUpsWindow = styled.div`
    background-color: ${props => props.theme.backdropColor};
    padding: 3rem;
`