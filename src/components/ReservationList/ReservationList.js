import React from 'react';
import { LiAddButton, LiDetails, Title, Wrapper, Ul, Li } from './styles/ReservationList';

export default function Reservation() {
    return (
        <Reservation.Wrapper>
            <Reservation.Title>Lista rezerwacji</Reservation.Title>
            <Ul>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
                </Li>
                <Li>
                    <LiDetails></LiDetails>
                    <LiAddButton>+</LiAddButton>
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
