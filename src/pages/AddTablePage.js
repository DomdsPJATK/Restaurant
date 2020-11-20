import React, { useState } from 'react';
import NewTable from '../components/NewTable/NewTable';
import { useLocation } from 'react-router-dom';

function TablePage() {
    let tableDetails = {
        tableId: "",
        numberOfSeats: ""
    };

    const location = useLocation();
    if (location.state !== undefined) tableDetails = location.state.details;


    return (
        <NewTable details={tableDetails} />
    );
}

export default TablePage;