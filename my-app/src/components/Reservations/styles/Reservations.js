import styled from 'styled-components/macro';

export const ReservationsContainer = styled.header`
    width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const ReservationsHeader = styled.div`
    width: 100%;
    background-color: orange;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const Wrapper = styled.div`
    margin-bottom: 10px;
`;

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const HeaderTableContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const TableDetailsContainer = styled.div`
    width: 100%;
    background-color: #22A7F0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 20px;
`;

export const DetailsButton = styled.div`
    width: 10%;
    background-color: #22A7F0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-left: 10px;
    padding: 20px;

    &:hover {
        background-color: orange;
    }
`;