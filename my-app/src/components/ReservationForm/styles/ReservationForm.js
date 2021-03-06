import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
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

export const TitleBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: grey;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    &:last-of-type {
        margin-bottom: 20px;
    }

`;

export const Form = styled.form`
    width: 100%;

    & > * {
        margin-top: 10px;
    }
`;

export const FormClientWrapper = styled.div`
    height: 300px;
    overflow-y: auto;
    width: 100%;
    border: 5px solid grey;
`;

export const SingleClientWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    width: 30px;
    height: 30px;
    margin: 0;
    margin-left: auto;

&:checked {
    background-color: orange;
}
`;