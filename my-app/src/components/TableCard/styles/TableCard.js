import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 799px){
        margin-top: 30px;
        padding: 20px;
        flex-direction: row;
        align-items: stretch;

        &:last-child{
            margin-bottom: 30px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5em;
    flex-direction: column;

    ${props => props.form && css`
        font-size: 1em;
        height: auto;
        padding: 30px;
    `}

    @media (max-width: 799px){
        font-size: 50px;
    }
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

export const ButtonsRowWrapper = styled.div`
    width: 80%;
    display: flex;
`;

export const EditButton = styled.div`
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: ${props => {
        if (props.type === "delete") return "#E04834";
        if (props.type === "modify") return "#22A7F0";
    }};
    font-size: 20%;
    padding: 25px;
    margin-left: 5px;

    &:hover {
        background-color: ${props => {
        if (props.type === "delete") return "#e03434";
        if (props.type === "modify") return "#4B77BE";
    }};
    }
`;

export const DisinfectionButton = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${props => props.isDisinfected ? "#40AD5B" : "#E04834"};
    font-size: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

export const Button = styled.div`
    width: 80%;
    height: 40px;
    background-color: #22A7F0;
    margin-top: 7px;
    font-size: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;

    &:hover {
        background-color: #4B77BE;
    }

`;
