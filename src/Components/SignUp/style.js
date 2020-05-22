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
    align-content: center;

    label, input {
        margin: 0.25rem 0;
    }

    input {
        font-size: 1rem;
        background: none;
        border: none;
        border-bottom: 2px solid black;
        text-decoration: none;
        outline: none;
    }
`