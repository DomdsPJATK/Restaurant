import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1300px;
    padding: 20px;
`;

export const BarWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const Title = styled.div`
    background-color: orange;
    height: 50px;
    min-width: 30%;
    padding: 20px;
    color: white;
    display: flex;
    align-items: center;
`;

export const ReservationInfo = styled.div`
    background-color: grey;
    height: 50px;
    width: 100%;
    margin-left: 10px;
    padding: 20px;
    color: white;
    display: flex;
    align-items: center;
`;

export const ReservationChangeWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const ReservationChangeBar = styled.div`
    background-color: orange;
    height: 50px;
    width: 100%;
    padding: 20px;
    color: white;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
