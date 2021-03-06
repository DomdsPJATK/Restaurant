import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, SeatsContainer, Seat, Wrapper, DisinfectionButton, Button, EditButton, ButtonsRowWrapper } from './styles/TableCard';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function TableCard(props) {
    const [data, setData] = useState(props.props);
    const [tableId, setTableId] = useState(data._id);
    const [tableNumber, setTableNumber] = useState(data.tableNumber);
    const [isDisinfected, setIsDisinfected] = useState(data.isSterilized);
    const [numberOfSeats, setNumberOfSeats] = useState(data.seats);
    const { t } = useTranslation();

    let history = useHistory();

    function handleClick() {
        history.push("/details", { tableId: tableId });
    }

    function toggleIsDisinfected() {
        let isSterilized = !isDisinfected;
        axios.post('http://localhost:9000/tables/updateTable', {
            _id: tableId,
            tableNumber: tableNumber,
            seats: numberOfSeats,
            isSterilized: isSterilized
        })
            .then(function (response) {
                console.log(response);
            })
        setIsDisinfected(isSterilized);
    }

    function getStatusOfDisinfection() {
        if (isDisinfected === true) return <>{t('table.sterilizedTrue')}</>;
        return <>{t('table.sterilizedFalse')}</>;
    }


    const deleteClick = (tableId) => {
        axios.delete(`http://localhost:9000/tables/deleteTable/${tableId}`)
            .then(function (response) {
                history.replace(`/reload`);
                setTimeout(() => {
                    history.replace('/');
                });
            });
    }

    function renderSeats() {
        let items = [];

        for (let i = 0; i < numberOfSeats; i++) {
            items.push(<TableCard.Seat key={i} />);
        }

        return items;
    }

    function modifyTable() {
        history.push("/tableForm", {
            tableId: tableId
        });
    }

    return (
        <TableCard.Wrapper>
            <TableCard.Container>
                {tableNumber}
                <ButtonsRowWrapper>
                    <DisinfectionButton isDisinfected={isDisinfected} onClick={() => toggleIsDisinfected()}>{getStatusOfDisinfection()}</DisinfectionButton>
                    <EditButton type="delete" onClick={() => deleteClick(tableId)}>X</EditButton>
                </ButtonsRowWrapper>
                <Button onClick={() => modifyTable()}>{t('functions.edit')}</Button>
                <Button onClick={() => handleClick()}>{t('functions.details')}</Button>
            </TableCard.Container>
            <TableCard.SeatsContainer>
                {renderSeats()}
            </TableCard.SeatsContainer>
        </TableCard.Wrapper>
    );

}


TableCard.Wrapper = function TableWrapper({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

TableCard.Container = function TableContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    );
}

TableCard.SeatsContainer = function TableSeatsContainer({ children }) {
    return (
        <SeatsContainer>{children}</SeatsContainer>
    );
}

TableCard.Seat = function TableSeat({ children }) {
    return (
        <Seat>{children}</Seat>
    );
}