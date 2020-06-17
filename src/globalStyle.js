import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html: {
        font-size: 62.5%;
    }

    a {
        color: ${props => props.theme.mainBlack};
        transition: all 0.25s
    }

    a:visited {
        color: ${props => props.theme.mainBlack};
    }

    a:hover {
        color: ${props => props.theme.hoverColor};
    }

    button {
        font-family: ${props => props.theme.primaryFont};
        font-size: 1rem;
        margin-top: 1rem;
        color: ${props => props.theme.mainBlack};
        background-color: ${props => props.theme.mainWhite};
        height: 3rem;
        width: 10rem;
        border-radius: 20px;
        border: solid 0px;
        align-self: center;
        transition: all 0.25s
    }

    button:active {
        background-color: ${props => props.theme.mainWhite};
        color: ${props => props.theme.mainBlack};
    }

    button:hover {
        font-size: 1rem;
        margin-top: 1rem;
        color: ${props => props.theme.mainWhite};
        background-color: ${props => props.theme.hoverColor};
        height: 3rem;
        width: 10rem;
        border-radius: 20px;
    }
`

