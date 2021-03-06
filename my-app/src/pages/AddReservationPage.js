import React from 'react';
import ReservationForm from '../components/ReservationForm/ReservationForm';
import { useLocation } from 'react-router-dom';

function AddReservationPage() {
    let id = 0;

    const location = useLocation();
    console.log(location);
    if (location.state !== undefined) id = location.state.reservationId;

    return (
        <ReservationForm reservationId={id} />
    );
}

export default AddReservationPage;