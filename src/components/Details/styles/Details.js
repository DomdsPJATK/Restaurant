import styled from 'styled-components/macro';

export const DetailsContainer = styled.header`
    width: 1300px;
    display: flex;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const ClientListWrapper = styled.div`
    width: 100%;
    padding: 20px;
`;