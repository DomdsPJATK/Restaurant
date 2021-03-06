import React, { useEffect, useState } from 'react';
import { TableListWrapper, DetailsContainer, Title, Wrapper, ItemWrapper, ItemLabel, ItemValue, TableDetailsHeader } from './styles/Details';
import Reservation from '../ReservationList/ReservationList';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Details = (props) => {
    const [dataAPI, setTables] = useState({});
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/tables/getTable/${props.tableId}`)
            .then(res => {
                const data = res.data;
                setTables(data);
            });
    }, []);

    const checkSterilized = (value) => {
        if (value) return "" + t('table.true');
        else return "" + t('table.false');
    }

    return (
        < DetailsContainer >
            <TableDetailsHeader>{t('details.header.table')}</TableDetailsHeader>
            <Wrapper>
                <ItemWrapper>
                    <ItemLabel>{t('table.tableNumber')}:</ItemLabel>
                    <ItemValue>{dataAPI.tableNumber}</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>{t('table.seats')}:</ItemLabel>
                    <ItemValue>{dataAPI.seats}</ItemValue>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLabel>{t('table.sterilizedTrue')}:</ItemLabel>
                    <ItemValue>{checkSterilized(dataAPI.isSterilized)}</ItemValue>
                </ItemWrapper>
            </Wrapper>
            <TableListWrapper>
                <Title>{t('details.reservations.table')}</Title>
                <Reservation tableId={props.tableId} />
            </TableListWrapper>
        </DetailsContainer >
    )
}

export default Details;