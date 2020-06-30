import styled from 'styled-components'
import homeImg from '../../resources/images/shore-top.png'

export const HomeContainer = styled.div`
    height: 87vh;
    background-image: url(${homeImg});
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: ${props => props.theme.primaryFont};
`

export const UserInfo = styled.div`
    
`

export const EventStream = styled.div`

`