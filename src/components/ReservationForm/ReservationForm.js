import React from 'react';
import { CounterTitle, CounterValue, Wrapper, CounterContainer, Form, Input } from './styles/ReservationForm';

export default function ReservationForm() {
    return (
        <ReservationForm.Wrapper>
            <ReservationForm.CounterContainer>
                <ReservationForm.CounterTitle>Wolnych siedzeń: </ReservationForm.CounterTitle>
                <ReservationForm.CounterValue>3</ReservationForm.CounterValue>
            </ReservationForm.CounterContainer>
            <Form>
                <Input type="datetime-local"></Input>
                <Input type="button" value="Rezerwuj"></Input>
            </Form>
        </ReservationForm.Wrapper>
    );
}

ReservationForm.Wrapper = function ItemWrapper({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

ReservationForm.CounterContainer = function Counter({ children }) {
    return (
        <CounterContainer>{children}</CounterContainer>
    );
}

ReservationForm.CounterTitle = function Title({ children }) {
    return (
        <CounterTitle>{children}</CounterTitle>
    );
}

ReservationForm.CounterValue = function Value({ children }) {
    return (
        <CounterValue>{children}</CounterValue>
    );
}