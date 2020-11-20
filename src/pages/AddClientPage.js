import React from 'react';
import NewClient from '../components/NewClient/NewClient';
import { useLocation } from 'react-router-dom';

function ClientPage() {
    let clientDetails = {
        id: "",
        name: "",
        surname: "",
        phoneNumber: ""
    };

    const location = useLocation();
    if (location.state !== undefined) clientDetails = location.state.clientDetails;

    return (
        <NewClient clientFormDetails={clientDetails} />
    );
}

export default ClientPage;