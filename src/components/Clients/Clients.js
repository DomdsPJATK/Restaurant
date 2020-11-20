import React from 'react';
import { ClientListWrapper, ClientsButton } from './styles/Clients';
import { ClientContainer, ClientListButton, ClientListHeader, ClientListItem, ClientListItemWrapper } from './styles/Clients';
import { useHistory } from "react-router-dom";

export default function Client() {
    let history = useHistory();

    function addNewClient() {
        history.push("/clientForm");
    }

    function modifyClient(id) {
        history.push("/clientForm", {
            clientDetails: {
                id: 1,
                name: "Dominik",
                surname: "Suchner",
                phoneNumber: "660-632-327"
            }
        });
    }

    function showDetails(id) {
        history.push("/clientDetails", { id: id });
    }

    return (
        <ClientContainer>
            <ClientListWrapper>
                <ClientsButton onClick={() => addNewClient()}>Dodaj nowego klienta</ClientsButton>
                <ClientListHeader>Lista klientów</ClientListHeader>
                <ClientListItemWrapper>
                    <ClientListItem>Dominik Suchner 660-632-327</ClientListItem>
                    <ClientListButton type="details" onClick={() => showDetails(1)}>Szczegóły</ClientListButton>
                    <ClientListButton type="modify" onClick={() => modifyClient(1)}>Modyfikuj</ClientListButton>
                    <ClientListButton type="delete">X</ClientListButton>
                </ClientListItemWrapper>
            </ClientListWrapper>
        </ClientContainer>
    );
}