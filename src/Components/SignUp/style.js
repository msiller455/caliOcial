import styled from 'styled-components'
import signUpImg from '../../resources/images/purple-sky.png'


export const SignUpContainer = styled.div`
    background-image: url(${signUpImg});
    background-size: cover;
    background-position: bottom;
    height: 87vh;
    font-family: 'Oxygen', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 1rem 0;
    }
`

export const SignUpWindow = styled.div`
    background-color: rgba(255, 255, 255, 0.26);
    padding: 3rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 700px) {
        width: 50%;
    }
`

export const SignUpForm = styled.form`
    width: 10rem;
    font-family: 'Oxygen', sans-serif;
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

    button {
        color: white;
        font-family: 'Oxygen', sans-serif;
        font-size: 1rem;
        margin-top: 1rem;
        background-color: #45A3D7;
        height: 3rem;
        width: 10rem;
        border-radius: 20px;
        border: solid 0px;
    }

    button:active {
        background-color: white;
        color: black;
    }

    button:hover {
        font-family: 'Oxygen', sans-serif;
        font-size: 1rem;
        margin-top: 1rem;
        background-color: rgb(34, 96, 129);
        height: 3rem;
        width: 10rem;
        border-radius: 20px;
    }
`