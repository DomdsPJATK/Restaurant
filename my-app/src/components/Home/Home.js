import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCard from '../TableCard/TableCard';
import { HomeContainer } from './styles/Home';

const Home = () => {
    const [dataAPI, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/tables/getTables`)
            .then(res => {
                const data = res.data;
                setData(data)
            });
    }, []);


    return (
        < HomeContainer >
            {dataAPI.map(table => <TableCard key={table._id} props={table}></TableCard>)}
        </HomeContainer >
    );
}


export default Home;