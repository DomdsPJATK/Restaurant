import React from 'react';
import { FormPickerWrapper, SingleItemPickerWrapper, Checkbox } from '../../globalStyles/GlobalStyles';
import { BarWrapper, ReservationChangeWrapper, ReservationInfo, Title, ReservationChangeBar, Wrapper } from './styles/ChangeClientReservation';
import Label from '../Label/Label';

export default function ChangeClientReservation() {

    return (
        <Wrapper>
            <BarWrapper>
                <Title>Obecna data rezerwacji:</Title>
                <ReservationInfo>Dnia 20.10.2020 godz. 20:30</ReservationInfo>
            </BarWrapper>
            <ReservationChangeWrapper>
                <ReservationChangeBar>Nowa data:</ReservationChangeBar>
                <FormPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                    <SingleItemPickerWrapper>
                        <Label fontSize="0.8em">Stolik numer 5 - dnia 21.10.2020 godz. 20:30<Checkbox></Checkbox></Label>
                    </SingleItemPickerWrapper>
                </FormPickerWrapper>
            </ReservationChangeWrapper>
        </Wrapper>
    );

}