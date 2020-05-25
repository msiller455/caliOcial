import styled from 'styled-components'
import signUpImg from '../../resources/images/purple-sky.png'


export const SignUpContainer = styled.div`
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

export const SignUpWindow = styled.div`
    background-color: ${props => props.theme.backdropColor};
    padding: 3rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 1rem 0;
    }

    @media (max-width: 700px) {
        width: 50%;
    }
`

export const SignUpForm = styled.form`
    width: 10rem;
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
`

export const ErrorMessage = styled.span`
    height: 15px;
    color: red;
    font-size: .75rem;
    visibility: ${props => props.error ? "visible" : "hidden"};
    align-self: flex-start;
    /* margin: 1rem; */
`