import React from 'react';
import Details from '../components/Details/Details';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
    const location = useLocation();
    const tableId = location.state.tableId;

    return (
        <Details tableId={tableId} />
    );
}

export default DetailsPage;