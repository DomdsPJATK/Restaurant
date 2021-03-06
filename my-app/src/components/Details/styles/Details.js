import styled from 'styled-components/macro';

export const DetailsContainer = styled.header`
    width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const TableListWrapper = styled.div`
    width: 100%;
`;

export const Title = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: orange;
    margin-bottom: 20px;
    color: white;
`;

export const Wrapper = styled.div`
    margin-bottom: 10px;
`;

export const ItemWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    color: white;
`;

export const ItemLabel = styled.div`
    background-color: grey;
    height: 50px;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export const ItemValue = styled.div`
    background-color: grey;
    height: 50px;
    padding: 20px;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

export const TableDetailsHeader = styled.div`
    width: 100%;
    background-color: orange;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;