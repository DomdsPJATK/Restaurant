import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const BackButton = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    background-color: grey;
    padding: 10px;

    &:hover {
        background-color: orange;
    }

`;