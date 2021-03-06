import React from 'react';
import { Item, Wrapper } from './styles/Navbar';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18n';

export default function Navbar() {
    const { t } = useTranslation();

    let history = useHistory();

    function handleClick(direction) {
        if (direction === "/") history.push("/");
        if (direction === "/clients") history.push("/clients");
        if (direction === "/tableForm") history.push("/tableForm");
        if (direction === "/reservations") history.push("/reservations");
        if (direction === "/addReservation") history.push("/addReservation");
        if (direction === "/clientForm") history.push("/clientForm");
        if (direction === "/PL") handleLanguageChange('pl');
        if (direction === "/EN") handleLanguageChange('en');
    }

    const handleLanguageChange = (language) => {
        i18next.changeLanguage(language, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
        });
    }


    return (
        <Wrapper>
            <Item onClick={() => handleClick("/")}>{t('nav.home')}</Item>
            <Item onClick={() => handleClick("/clients")}>{t('nav.clients')}</Item>
            <Item onClick={() => handleClick("/reservations")}>{t('nav.reservations')}</Item>
            <Item onClick={() => handleClick("/addReservation")}>{t('nav.addReservation')}</Item>
            <Item onClick={() => handleClick("/tableForm")}>{t('nav.addTable')}</Item>
            <Item onClick={() => handleClick("/clientForm")}>{t('nav.addClient')}</Item>
            <Item onClick={() => handleClick("/PL")}>PL</Item>
            <Item onClick={() => handleClick("/EN")}>EN</Item>
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