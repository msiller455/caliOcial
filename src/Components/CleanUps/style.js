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
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 40rem;
    width: 40rem;
`
export const CleanUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`


export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: space-evenly;
`

export const SelectInput = styled.div`
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`