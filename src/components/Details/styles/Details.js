import styled from 'styled-components/macro';

export const DetailsContainer = styled.header`
    width: 1300px;
    min-height: 100vh;
    display: flex;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;