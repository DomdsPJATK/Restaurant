import styled from 'styled-components';

export const ChooseClientContainer = styled.header`
    width: 1300px;
    display: flex;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const ClientFormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ClientFormHeader = styled.div`
    width: 100%;
    background-color: orange;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const ClientSelect = styled.select`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: grey;
    padding: 10px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    
    &:focus {
            border: none;
            background-color: orange;
            outline: 0;
    }

`;

export const ClientOption = styled.option`
    font-size: 1em;
    padding: 10px;
    background-color: grey;
`;

