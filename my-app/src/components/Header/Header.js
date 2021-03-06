import React from 'react';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer, Logo } from './styles/Header';


const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="https://logos-download.com/wp-content/uploads/2016/03/Subway_logo_white.png" />
            <Navbar></Navbar>
        </HeaderContainer>
    );
}

export default Header;