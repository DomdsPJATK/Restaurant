import React from 'react';
import { DetailsContainer } from './styles/Details';
import Reservation from '../ReservationList/ReservationList';
import ResevationForm from '../ReservationForm/ReservationForm';

const Details = () => {
    return (
        <DetailsContainer>
            <ResevationForm />
            <Reservation />
        </DetailsContainer>
    )
}

export default Details;