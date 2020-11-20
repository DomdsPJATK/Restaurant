import React, { useState } from 'react';
import { Container, SeatsContainer, Seat, Wrapper, DisinfectionButton, Button, EditButton, ButtonsRowWrapper } from './styles/TableCard';
import { useHistory } from "react-router-dom";


export default function TableCard(props) {
    const [tableId, setTableId] = useState(2);
    const [isDisinfected, setIsDisinfected] = useState(false);
    const [numberOfSeats, setNumberOfSeats] = useState(8);

    let history = useHistory();

    function handleClick() {
        history.push("/details", { id: tableId });
    }

    function toggleIsDisinfected() {
        setIsDisinfected(!isDisinfected);
    }

    function getStatusOfDisinfection() {
        if (isDisinfected === true) return <>Zdezynfekowany</>;
        return <>Niezdezynfekowany</>;
    }

    function renderSeats() {
        let items = [];

        for (let i = 0; i < numberOfSeats; i++) {
            items.push(<TableCard.Seat />);
        }

        return items;
    }

    function modifyTable() {
        history.push("/tableForm", {
            details: {
                tableId: tableId,
                isDisinfected: isDisinfected,
                numberOfSeats: numberOfSeats
            }
        });
    }

    return (
        <TableCard.Wrapper>
            <TableCard.Container>
                {tableId}
                <ButtonsRowWrapper>
                    <DisinfectionButton isDisinfected={isDisinfected} onClick={() => toggleIsDisinfected()}>{getStatusOfDisinfection()}</DisinfectionButton>
                    <EditButton type="delete">X</EditButton>
                </ButtonsRowWrapper>
                <Button onClick={() => modifyTable()}> Modyfikuj</Button>
                <Button onClick={() => handleClick()}> Rezerwacje</Button>
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