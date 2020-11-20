import React from 'react';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer, Logo } from './styles/Header';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="http://www.magdagessler.pl/Obrazki/logo.png" />
            <Navbar></Navbar>
        </HeaderContainer>
    );
}

export default Header;