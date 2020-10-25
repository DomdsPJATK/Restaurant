import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 30px;
    flex: 2;
`;

export const Title = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: grey;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin-top: 10px;
`;

export const Li = styled.li`
    width: 100%;
    display: flex;
    height: 50px;
    text-align: none;
    list-style-type: none;
    list-style: none;
    padding-left: 0;
    margin-top: 10px;
    
    &:first-child {
        margin-top: 0;
    }
`;

export const LiDetails = styled.div`
    flex: 6;
    background-color: grey;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-right: 10px;
`;

export const LiAddButton = styled.div`
    flex: 1;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    &:hover {
        background-color: orange;
    }
`;
