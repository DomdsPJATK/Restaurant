import React from 'react';
import { Input } from '../../globalStyles/GlobalStyles'
import { ChooseClientContainer, ClientFormHeader, ClientFormWrapper } from './styles/ChooseClient';
import { Select, Option } from '../../globalStyles/GlobalStyles';
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
                <Select>
                    <Option>Dominik Suchner</Option>
                    <Option>Dominik Suchner</Option>
                    <Option>Dominik Suchner</Option>
                    <Option>Dominik Suchner</Option>
                </Select>
                <Input type="button" value="Dodaj" onClick={() => handleClick()}></Input>
            </ClientFormWrapper>
        </ChooseClientContainer>
    );
}