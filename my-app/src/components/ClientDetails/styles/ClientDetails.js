import styled from 'styled-components/macro';

export const ClientDetailsContainer = styled.header`
    width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const ClientDetailsHeader = styled.div`
    width: 100%;
    background-color: orange;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const ListItemDetails = styled.div`
    background-color: grey;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const ListItemTable = styled.div`
    background-color: grey;
    height: 50px;
    min-width: 20%;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-right: 5px;
`;

export const ListItemButton = styled.div`
    margin-left: 5px;
    background-color: grey;
    min-width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    &:hover{
        background-color: ${props => props.isBlueHover ? "#22A7F0" : "#E04834"};
    }
`;

export const Ul = styled.ul`
    list-style: none;
    margin-top: 10px;
    color: white;
    padding: 0px;
`;

export const Li = styled.li`
    width: 100%;
    display: flex;
    margin-right: 0;
    margin-right: 0px;
    margin-bottom: 10px;
`;