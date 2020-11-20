import React from 'react';
import ClientDetails from '../components/ClientDetails/ClientDetails';
import { useLocation } from 'react-router-dom';

function ClientDetailsPage() {

    const location = useLocation();
    const id = location.state.id;

    return (
        <ClientDetails id={id} />
    );
}

export default ClientDetailsPage;