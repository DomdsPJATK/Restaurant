import styled, { css } from 'styled-components/macro';

export const InputStyled = styled.input`

    width: ${props => props.width || "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    box-sizing: border-box;
    background-color: grey;

    ${props => props.type === 'text' && css`
        padding: 10px;
        border: ${props => props.isBordered ? "5px solid grey" : "none"};
        color: grey;
        outline: 0;
        background-color: white;
    `}

    ${props => props.type === 'datetime-local' && css`
        padding: 20px;

        &:focus, &:active {
            border: none;
            background-color: orange;
            outline: 0;
        }
    `}

    ${props => props.type === 'button' && css`

        background-color: ${props => props.isOrange ? "orange" : "grey"};
        color: white;
    
        &:hover {
            background-color: ${props => props.isOrange ? "#22A7F0" : "orange"};
        }

        &:focus {
            border: none;
            background-color: orange;
            outline: 0;
        }

    `}

`;