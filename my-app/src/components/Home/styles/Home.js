import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 1300px;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: auto;
`;