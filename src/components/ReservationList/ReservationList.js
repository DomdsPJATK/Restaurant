import React from 'react';
import { LiDetailsWrapper, LiRemoveButton, LiAddButton, LiDetails, Title, Wrapper, Ul, Li } from './styles/ReservationList';
import { useHistory } from 'react-router-dom';

export default function Reservation({ idTable }) {
    let history = useHistory();

    function handleClick(idResevation) {
        history.push("/details/chooseClient", { idTable, idResevation });
    }

    return (
        <Reservation.Wrapper>
            <Reservation.Title>Lista rezerwacji stolika numer: {idTable}</Reservation.Title>
            <Ul>
                <Li>
                    <LiDetailsWrapper>
                        <LiDetails>Data rezerwacji: 23.10.2020 15:30</LiDetails>
                        <Ul>
                            <Li>
                                <LiDetails>Piotr Nowak 512-007-255</LiDetails>
                                <LiRemoveButton>X</LiRemoveButton>
                            </Li>
                            <Li>
                                <LiDetails>Jan Kowalski 666-666-666</LiDetails>
                                <LiRemoveButton>X</LiRemoveButton>
                            </Li>
                        </Ul>
                    </LiDetailsWrapper>
                    <LiAddButton onClick={() => handleClick(1)}>+</LiAddButton>
                    <LiRemoveButton>X</LiRemoveButton>
                </Li>
            </Ul>
            <Ul>
                <Li>
                    <LiDetailsWrapper>
                        <LiDetails>Data rezerwacji: 23.10.2020 15:30</LiDetails>
                        <Ul>
                            <Li>
                                <LiDetails>Piotr Nowak 512-007-255</LiDetails>
                                <LiRemoveButton>X</LiRemoveButton>
                            </Li>
                            <Li>
                                <LiDetails>Jan Kowalski 666-666-666</LiDetails>
                                <LiRemoveButton>X</LiRemoveButton>
                            </Li>
                        </Ul>
                    </LiDetailsWrapper>
                    <LiAddButton onClick={() => handleClick(1)}>+</LiAddButton>
                    <LiRemoveButton>X</LiRemoveButton>
                </Li>
            </Ul>

        </Reservation.Wrapper>
    );
}

Reservation.Wrapper = function ReservationWrapper({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

Reservation.Title = function TitleBar({ children }) {
    return (
        <Title>{children}</Title>
    );
}

Reservation.LiDetails = function ReservationDetails({ children }) {
    return (
        <LiDetails>{children}</LiDetails>
    );
}

Reservation.LiAddButton = function AddButton({ children }) {
    return (
        <LiAddButton>{children}</LiAddButton>
    );
}

Reservation.LiRemoveButton = function AddButton({ children }) {
    return (
        <LiRemoveButton>{children}</LiRemoveButton>
    );
}
