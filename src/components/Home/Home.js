import React from 'react';
import TableCard from '../TableCard/TableCard';
import { HomeContainer } from './styles/Home';

const Home = () => {
    return (
        <HomeContainer>
            <TableCard></TableCard>
            <TableCard></TableCard>
            <TableCard></TableCard>
            <TableCard></TableCard>
            <TableCard></TableCard>
        </HomeContainer>
    );
}


export default Home;