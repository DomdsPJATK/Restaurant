import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DetailsButton, HeaderTableContainer, ReservationsContainer, ReservationsHeader, TableContainer, TableDetailsContainer, Wrapper } from './styles/Reservations';
import Reservation from '../../components/ReservationList/ReservationList';
import { useTranslation } from 'react-i18next';

export default function Reservations() {
    const [dataAPI, setDataAPI] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/tables/getTables`)
            .then(res => {
                const data = res.data;
                setDataAPI(data)
            });
    }, []);


    return (
        <ReservationsContainer>
            <Wrapper>
                {dataAPI.map(table =>
                    <TableContainer key={table._id}>
                        <HeaderTableContainer>
                            <TableDetailsContainer>{t('reservation.bar')} {table.tableNumber}</TableDetailsContainer>
                        </HeaderTableContainer>
                        <Reservation tableId={table._id}></Reservation>
                    </TableContainer>
                )}
            </Wrapper>
        </ReservationsContainer>
    );

}