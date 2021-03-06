import styled from 'styled-components/macro';

export const NewTableContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    color: white;
    padding: 20px;
`;

export const TitleBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: grey;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    & > * {
        margin-top: 15px;
    };

`;

export const InputWrapper = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: center;

    &:last-of-type {
        margin-bottom: 20px;
    }

`;

export const Select = styled.select`
    margin-left: 10px;
    width: 75px;
    height: 50px;
    border: 5px solid grey;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border: 5px;
    width: 40px;
    height: 40px;
    margin: 0;
    margin-left: 10px;
    outline: 0;

`;