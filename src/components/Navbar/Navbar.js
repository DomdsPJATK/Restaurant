import React from 'react';
import { Item, Wrapper } from './styles/Navbar';
import { useHistory } from 'react-router-dom';

export default function Navbar() {

    let history = useHistory();

    function handleClick(direction) {
        if (direction === "/") history.push("/");
        if (direction === "/clients") history.push("/clients");
        if (direction === "/tableForm") history.push("/tableForm");
    }


    return (
        <Wrapper>
            <Item onClick={() => handleClick("/")}>Home</Item>
            <Item onClick={() => handleClick("/clients")}>Lista klientów</Item>
            <Item onClick={() => handleClick("/tableForm")}>Dodaj stolik</Item>
        </Wrapper>
    );
}

Navbar.Wrapper = function NavbarWrapper({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

Navbar.Item = function NavbarItem({ children }) {
    return (
        <Item>{children}</Item>
    );
}