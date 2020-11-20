import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    text-align: center;
    color: white;
    flex: 1;
`;

export const CounterContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`;

export const CounterTitle = styled.div`
    width: 100%;
    height: 50px;
    background-color: grey;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-right: 5px;
`;

export const CounterValue = styled.div`
    width: 20%;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Form = styled.form`
    width: 100%;

    & > * {
        margin-top: 10px;
    }
`;



