import styled from 'styled-components/macro';

export const ClientContainer = styled.header`
    width: 1300px;
    display: flex;
    padding: 20px;

    @media (max-width: 799px){
        flex-direction: column;
    }
`;

export const ClientListWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`;

export const ClientListHeader = styled.div`
    width: 100%;
    background-color: orange;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const ClientListItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: grey;
    padding: 10px;
    color: white;
`;

export const ClientListButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 15px;
    background-color: grey;
    color: white;
    margin-left: 5px;

    &:hover {
        background-color: ${props => {
        if (props.type === "delete") return "#E04834";
        if (props.type === "modify") return "#22A7F0";
        if (props.type === "details") return "orange";
    }}; 
    }

`;

export const ClientListItemWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
`;

export const ClientsButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1em;
    width: 100%;
    height: 50px;
    background-color: #22A7F0;
    margin-bottom: 20px;

    &:hover {
        background-color: #1a5cb0;
    }
`;