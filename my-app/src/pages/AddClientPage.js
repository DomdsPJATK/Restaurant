import React from 'react';
import NewClient from '../components/NewClient/NewClient';
import { useLocation } from 'react-router-dom';

function ClientPage() {
    let id = 0;

    const location = useLocation();
    console.log(location)
    if (location.state !== undefined) id = location.state.clientId;

    return (
        <NewClient clientId={id} />
    );
}

export default ClientPage;