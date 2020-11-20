import React from 'react';
import { CounterTitle, CounterValue, Wrapper, CounterContainer, Form } from './styles/ReservationForm';
import Input from '../Input/Input';
import { useHistory } from 'react-router-dom';

export default function ReservationForm({ id }) {
    let history = useHistory();

    function handleClick() {
        history.push("/details", { id });
    }

    return (
        <ReservationForm.Wrapper>
            <ReservationForm.CounterContainer>
                <ReservationForm.CounterTitle>Numer stolika: </ReservationForm.CounterTitle>
                <ReservationForm.CounterValue>{id}</ReservationForm.CounterValue>
            </ReservationForm.CounterContainer>
            <Form>
                <Input type="datetime-local"></Input>
                <Input type="button" value="Rezerwuj" onClick={() => handleClick()}></Input>
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