import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    padding: 37px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 799px){
        margin-top: 30px;
        padding: 20px;
        flex-direction: row;

        &:last-child{
            margin-bottom: 30px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5em;
    flex-direction: column;
`;

export const SeatsContainer = styled.div`
    width: 100%;
    margin-top: 5px;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
    grid-auto-rows: 66px;
    grid-gap: 5px;

    @media (max-width: 799px){
        margin-top: 0;
        margin-left: 5px;
    }
`;

export const Seat = styled.div`
    background-color: grey;
`;

export const DisinfectionButton = styled.div`
    width: 70%;
    height: 40px;
    background-color: ${props => props.isDisinfected ? "#40AD5B" : "#E04834"};;
    margin-bottom: 10px;
    font-size: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

export const DetailsButton = styled.div`
    width: 70%;
    height: 40px;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;