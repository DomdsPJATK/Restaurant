import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    margin-left: auto;
`;

export const Item = styled.div`
    height: 35px;
    padding: 10px;
    margin-left: 10px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &:hover {
        background-color: orangered;
    }
    
    &:visited {
        background-color: orangered;
    }
`;