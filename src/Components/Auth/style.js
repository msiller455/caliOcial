import styled from 'styled-components'
import signUpImg from '../../resources/images/purple-sky.png'
import { Link } from 'react-router-dom'


export const AuthContainer = styled.div`
    background-image: url(${signUpImg});
    background-size: cover;
    background-position: bottom;
    height: 87vh;
    font-family: ${props => props.theme.primaryFont};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AuthWindow = styled.div`
    background-color: ${props => props.theme.backdropColor};
    padding: 3rem;
    width: 30%;
    height: ${props => props.page === "login" ? "430px" : ""};
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 1rem 0;
    }

    p {
        margin: 1rem 0;
    }

    @media (max-width: 500px) {
        width: 80%;
        height: ${props => props.page === "login" ? "60vh" : "85vh"}
    }

    @media (min-width: 501px) and (max-width: 700px) {
        width: 70%;
    }

    @media (min-width: 701px) and (max-width: 1400px) {
        width: 40%;
    }
`

export const AuthForm = styled.form`
    width: 20rem;
    font-family: ${props => props.theme.primaryFont};
    display: flex;
    flex-direction: column;
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

    @media (max-width: 900px) {
        width: 16rem;
    }
`

export const PwMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`


export const ErrorMessage = styled.span`
    text-align: left;
    height: 30px;
    color: red;
    font-size: .75rem;
    align-self: flex-start;
`

export const AuthLink = styled(Link)`
    font-size: ${props => props.page === "forget" ? "1rem" : "0.75rem"};
    text-decoration: none;
    margin-top: ${props => props.page === "forget" ? "1.5rem" : ""};
`