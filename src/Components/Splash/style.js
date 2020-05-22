import styled from 'styled-components'
import splashImg from '../../resources/images/purple-sky.png'

export const SplashContainer = styled.div`
    background-image: url(${splashImg});
    background-size: cover;
    background-position: bottom;
    height: 87vh;
    padding: 6rem 0rem 0rem 16rem;

    @media (max-width: 770px) {
        padding: 6rem 0rem 0rem 4rem; 
    }
`

export const Title = styled.div`
    display: flex;
    flex-flow: column;
    font-family: ${props => props.theme.titleFont};
    color: ${props => props.theme.mainWhite};

    h1 {
        font-size: 4rem;
        letter-spacing: .25rem;
    }

    h3 {
        font-size: 1.5rem;
    }
`

