import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    flex: 2;

    & > Ul > Li {
        &:first-child {
            margin-top: 0;
        }
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    margin: 0px;
    margin-bottom: 10px;
    
    & > Li{
        &:first-child {
            margin-top: 0px;
        }
    }

`;

export const Li = styled.li`
    width: 100%;
    display: flex;
    text-align: none;
    list-style-type: none;
    list-style: none;
    padding-left: 0;
    margin-top: 10px;
`;

export const LiDetailsWrapper = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    & > ul > li:first-child {
        margin-top: 10px;
    }

    & > div {
        background-color: orange;
    }

`;

export const LiDetails = styled.div`
    width: 100%;
    background-color: grey;
    display: flex;
    align-items: center;
    padding: 20px;
    height: 50px;
`;

export const LiAddButton = styled.div`
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-right: 10px;
    height: 50px;
    margin-left: 10px;

    &:hover {
        background-color: orange;
    }
`;

export const LiRemoveButton = styled.div`
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 50px;

    &:hover {
        background-color: #E04834;
    }
`;

export const ModifyButton = styled.div`
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 50px;
    margin-right: 10px;

    &:hover {
        background-color: #22A7F0;
    }
`;

