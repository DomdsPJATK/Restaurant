import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClientDetailsContainer, ClientDetailsHeader, ItemLabel, ItemValue, ItemWrapper, ListItemButton, ListItemDetails, ListItemTable, Wrapper, Li, Ul } from './styles/ClientDetails';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ClientDetails(props) {
    const [client, setClient] = useState(null);
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/clients/getClient/${props.clientId}`)
            .then(res => {
                const data = res.data;
                setClient(data);
            });
    }, []);

    function modifyClick(reservationId) {
        console.log(reservationId)
        history.push("/addReservation", { reservationId: reservationId });
    }

    const handleClick = () => {
        history.push("/changeReservation");
    }

    const deleteClick = (reservationId) => {
        axios.delete(`http://localhost:9000/reservations/deleteReservation/${reservationId}`)
            .then(function (response) {
                history.replace(`/reload`);
                setTimeout(() => {
                    history.replace('/clientDetails');
                });
            });
    }

    function getDate(date) {
        var currentdate = new Date(date);
        var year = currentdate.getFullYear();
        var month = currentdate.getMonth() + 1;
        var day = currentdate.getDate();
        return t('reservation.dateSentence') + " " + [year,
            (month > 9 ? '' : '0') + month,
            (day > 9 ? '' : '0') + day
        ].join('-') + " " + t('reservation.timeSentence') + " " + [(currentdate.getHours() > 9 ? '' : '0') + currentdate.getHours(), (currentdate.getMinutes() > 9 ? '' : '0') + currentdate.getMinutes()].join(':');
    }

    if (client !== null) return (
        <ClientDetailsContainer>
            <ClientDetailsHeader>{t('details.header.client')}</ClientDetailsHeader>
            <Wrapper>
                <ItemWrapper>
                    <ItemLabel>{t('client.name')}:</ItemLabel>
                    <ItemValue>{client.person.firstName}</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>{t('client.surname')}:</ItemLabel>
                    <ItemValue>{client.person.surName}</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>{t('client.phoneNumber')}:</ItemLabel>
                    <ItemValue>{client.phoneNumber}</ItemValue>
                </ItemWrapper>
            </Wrapper>
            <ClientDetailsHeader>{t('details.reservations.client')}</ClientDetailsHeader>
            <Wrapper>
                <Ul>
                    {client.reservations.map(reservation => {
                        let date = new Date(reservation.date);
                        return <Li key={reservation._id}>
                            <ListItemTable>{t('table.tableNumber')}: {reservation.table.tableNumber}</ListItemTable>
                            <ListItemDetails>{getDate(reservation.date)}</ListItemDetails>
                            <ListItemButton isBlueHover onClick={() => modifyClick(reservation._id)}>{t('functions.edit')}</ListItemButton>
                            <ListItemButton onClick={() => deleteClick(reservation._id)}>X</ListItemButton>
                        </Li>
                    })}
                </Ul>
            </Wrapper>
        </ClientDetailsContainer>
    )
    else return <></>;

}