import React, { useState } from 'react';
import NewTable from '../components/NewTable/NewTable';
import { useLocation } from 'react-router-dom';

function TablePage() {
    let id = 0;

    const location = useLocation();
    console.log(location)
    if (location.state !== undefined) id = location.state.tableId;;


    return (
        <NewTable tableId={id} />
    );
}

export default TablePage;