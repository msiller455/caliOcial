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
    height: 45rem;
    width: 40rem;

    h1 {
        margin: 1rem 0;
    }
`
export const CleanUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

    & > select {
        width: ${props => props.county ? "10rem" : "18rem"};
    }
`

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 80%;
    align-self: center;
    justify-content: space-around;

    label, input {
        margin: 0.25rem 0;
    }

    label {
        align-self: flex-start;
        margin-top: 1rem;
    }

    input {
        font-size: 1rem;
        background: none;
        border: none;
        border-bottom: 2px solid ${props => props.theme.mainBlack};
        text-decoration: none;
        outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        border-bottom: 2px solid ${props => props.theme.mainBlack};
        -webkit-text-fill-color: ${props => props.theme.mainBlack};
        -webkit-box-shadow: 0 0 0px 0  inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    textarea {
        height: 12rem;
        background: rgba(255,255,255,0.5);
        outline: none;
        border: solid 1px lightgray;
        resize: none;
        padding: 1rem;
    }
`

export const ErrorMessage = styled.span`
    text-align: ${props => props.firebase ? "center" : "left"};
    height: 30px;
    color: red;
    font-size: .75rem;
    align-self: ${props => props.firebase ? "center" : "flex-start"};
`