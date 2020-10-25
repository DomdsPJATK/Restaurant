import React from 'react';
import { MainContainer } from './styles/Main';

const Main = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
}

export default Main;