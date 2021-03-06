import React from 'react';
import { useHistory } from 'react-router-dom';
import { BackButton, MainContainer } from './styles/Main';

const Main = ({ children }) => {

    const history = useHistory();

    return (
        <>
            <MainContainer>
                {children}
            </MainContainer>
        </>
    );
}

export default Main;