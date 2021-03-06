import React, { useEffect, useState } from 'react';
import { LiDetailsWrapper, LiRemoveButton, LiAddButton, LiDetails, Title, Wrapper, Ul, Li, ModifyButton } from './styles/ReservationList';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Reservation(props) {
    const [dataAPI, setData] = useState([]);
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/reservations/getReservationsForTable/${props.tableId}`)
            .then(res => {
                const data = res.data;
                setData(data);
            });
    }, []);

    function modifyClick(reservationId) {
        console.log(reservationId)
        history.push("/addReservation", { reservationId: reservationId });
    }


    const deleteClick = (reservationId) => {
        axios.delete(`http://localhost:9000/reservations/deleteReservation/${reservationId}`)
            .then(function (response) {
                history.replace(`/reload`);
                setTimeout(() => {
                    history.replace('/reservations');
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

    const renderElement = (res) => {

        return (<Ul key={res._id}>
            <Li>
                <LiDetailsWrapper>
                    <LiDetails>{getDate(res.date)}</LiDetails>
                    <Ul>
                        <Li>
                            <LiDetails>{res.client.person.firstName} {res.client.person.surName} {res.client.phoneNumber}</LiDetails>
                        </Li>
                    </Ul>
                </LiDetailsWrapper>
                <ModifyButton onClick={() => modifyClick(res._id)}>{t('functions.edit')}</ModifyButton>
                <LiRemoveButton onClick={() => deleteClick(res._id)}>X</LiRemoveButton>
            </Li>
        </Ul>);
    }

    return (
        <Wrapper>
            {dataAPI.map(res => renderElement(res))}
        </Wrapper>
    );
}