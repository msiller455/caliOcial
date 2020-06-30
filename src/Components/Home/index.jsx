import React, { useContext, useState, useEffect } from 'react';
import { AuthUserContext } from '../Session'
import { HomeContainer, UserInfo, EventStream } from './style'
import Loader from '../Loader'

const Home = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const user = useContext(AuthUserContext)

    useEffect(() => {
        user && setIsLoading(false)
    }, [user])

    return (
        <HomeContainer>
            {
                isLoading ? <Loader color={"white"} />
                :
                <>
                    <UserInfo>
                        <h1>{user.username}</h1>
                    </UserInfo>
                    <EventStream>

                    </EventStream>
                </>
            }
        </HomeContainer>
    );
};

export default Home;