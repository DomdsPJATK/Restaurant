import React from 'react';
import Input from '../Input/Input';
import { ChooseClientContainer, ClientFormHeader, ClientFormWrapper, ClientOption, ClientSelect } from './styles/ChooseClient';
import { useHistory } from 'react-router-dom';

export default function ChooseClient({ idTable, idReservation }) {
    let history = useHistory();

    function handleClick() {
        history.push("/details", { idReservation });
    }

    return (
        <ChooseClientContainer>
            <ClientFormWrapper>
                <ClientFormHeader>Wybierz klienta:</ClientFormHeader>
                <ClientSelect>
                    <ClientOption>Dominik Suchner</ClientOption>
                    <ClientOption>Dominik Suchner</ClientOption>
                    <ClientOption>Dominik Suchner</ClientOption>
                    <ClientOption>Dominik Suchner</ClientOption>
                </ClientSelect>
                <Input type="button" value="Dodaj" onClick={() => handleClick()}></Input>
            </ClientFormWrapper>
        </ChooseClientContainer>
    );
}