import React from 'react';
import { DetailsContainer } from './styles/Details';
import Reservation from '../ReservationList/ReservationList';
import ResevationForm from '../ReservationForm/ReservationForm';
import { useLocation } from 'react-router-dom';

const Details = () => {

    const location = useLocation();
    const myparam = location.state.id;

    return (
        <DetailsContainer>
            <ResevationForm id={myparam} />
            <Reservation idTable={myparam} />
        </DetailsContainer>
    )
}

export default Details;