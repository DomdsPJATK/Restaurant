import React from 'react';
import { ClientDetailsContainer, ClientDetailsHeader, ItemLabel, ItemValue, ItemWrapper, ListItemButton, ListItemDetails, ListItemTable, Wrapper, Li, Ul } from './styles/ClientDetails';

export default function ClientDetails(props) {

    return (
        <ClientDetailsContainer>
            <ClientDetailsHeader>Szczegóły klienta</ClientDetailsHeader>
            <Wrapper>
                <ItemWrapper>
                    <ItemLabel>Imię:</ItemLabel>
                    <ItemValue>Dominik</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>Nazwisko:</ItemLabel>
                    <ItemValue>Suchner</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>Numer telefonu:</ItemLabel>
                    <ItemValue>660-632-327</ItemValue>
                </ItemWrapper>
            </Wrapper>
            <ClientDetailsHeader>Rezerwacje klienta</ClientDetailsHeader>
            <Wrapper>
                <Ul>
                    <Li>
                        <ListItemTable>Stolik numer: 3</ListItemTable>
                        <ListItemDetails>Dnia: 20.12.2020 Godz: 19:30</ListItemDetails>
                        <ListItemButton>X</ListItemButton>
                    </Li>
                </Ul>
            </Wrapper>
        </ClientDetailsContainer>
    );

}