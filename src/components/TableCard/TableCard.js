import React from 'react';
import { Container, SeatsContainer, Seat, Wrapper, DisinfectionButton, DetailsButton } from './styles/TableCard';


export default function TableCard({ children, ...restProps }) {
    return (
        <TableCard.Wrapper>
            <TableCard.Container>
                1
                <DisinfectionButton isDisinfected>Zdezynfekowany</DisinfectionButton>
                <DetailsButton>Rezerwacje</DetailsButton>
            </TableCard.Container>
            <TableCard.SeatsContainer>
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
                <TableCard.Seat />
            </TableCard.SeatsContainer>
        </TableCard.Wrapper>
    );
}

TableCard.Wrapper = function TableWrapper({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

TableCard.Container = function TableContainer({ children }) {
    return (
        <Container>{children}</Container>
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

TableCard.DisinfectionButton = function Button({ children }) {
    return (
        <DisinfectionButton>{children}</DisinfectionButton>
    );
}

TableCard.DetailsButton = function Details({ children }) {
    return (
        <DetailsButton>{children}</DetailsButton>
    );
}
