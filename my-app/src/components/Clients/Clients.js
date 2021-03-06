import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClientListWrapper, ClientsButton } from './styles/Clients';
import { ClientContainer, ClientListButton, ClientListHeader, ClientListItem, ClientListItemWrapper } from './styles/Clients';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Client() {
    const [clients, setClients] = useState([]);
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/clients/getClients`)
            .then(res => {
                const data = res.data;
                setClients(data);
            });
    }, []);

    console.log(clients)


    function modifyClient(id) {
        history.push("/clientForm", { clientId: id });
    }

    function showDetails(id) {
        history.push("/clientDetails", { clientId: id });
    }

    const deleteClick = (clientId) => {
        axios.delete(`http://localhost:9000/clients/deleteClient/${clientId}`)
            .then(function (response) {
                history.replace(`/reload`);
                setTimeout(() => {
                    history.replace('/clients');
                });
            });
    }

    return (
        <ClientContainer>
            <ClientListWrapper>
                <ClientListHeader>{t('nav.clients')}</ClientListHeader>
                {clients.map(client =>
                    <ClientListItemWrapper key={client._id}>
                        <ClientListItem>{client.person.firstName} {client.person.surName} {client.phoneNumber}</ClientListItem>
                        <ClientListButton type="details" onClick={() => showDetails(client._id)}>{t('functions.details')}</ClientListButton>
                        <ClientListButton type="modify" onClick={() => modifyClient(client._id)}>{t('functions.edit')}</ClientListButton>
                        <ClientListButton type="delete" onClick={() => deleteClick(client._id)}>X</ClientListButton>
                    </ClientListItemWrapper>)}
            </ClientListWrapper>
        </ClientContainer>
    );
}