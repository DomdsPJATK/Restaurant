import styled, { createGlobalStyle, css } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #1a5cb0;
    font-size: 1.1vw;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  input {
    font-family: 'Poppins', sans-serif;
    border: none;
    font-size: 1.1vw;
    color: white;
  }
  
`;

export const Input = styled.input`

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
        margin-left: 10px;
        margin-right: 10px;
    `}

    
    ${props => props.type === 'number' && css`
        padding: 10px;
        border: ${props => props.isBordered ? "5px solid grey" : "none"};
        color: grey;
        outline: 0;
        background-color: white;
        margin-left: 10px;
        margin-right: 10px;
    `}

    ${props => props.type === 'datetime-local' && css`
        padding: 20px;
        margin-left: 10px;
        margin-right: 10px;

        &:focus, &:active {
            border: none;
            background-color: orange;
            outline: 0;
        }
    `}

    ${props => props.type === 'submit' && css`

        background-color: ${props => props.isOrange ? "orange" : "#BA55D3"};
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

    &::placeholder {
      color: lightblue;
    }

`;

export const Select = styled.select`
    display: flex;
    align-items: center;
    width: ${props => props.width || "100%"};
    height: 50px;
    background-color: grey;
    padding: 10px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1em;

    ${props => props.isMargin === true && css`
        margin-left: 10px;
        width: 300px;
    `}
    
    &:focus {
            border: none;
            background-color: #22A7F0;
            outline: 0;
    }

`;

export const Option = styled.option`
    font-size: 1em;
    padding: 10px;
    background-color: white;
    color: black;
`;

export const FormPickerWrapper = styled.div`
    height: 300px;
    overflow-y: auto;
    width: 100%;
    border: 5px solid grey;
`;

export const SingleItemPickerWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    width: 30px;
    height: 30px;
    margin: 0;
    margin-left: auto;

&:checked {
    background-color: orange;
}
`;

export const ErrorBar = styled.div`
    height: auto;
    width: 100%;
    background-color: #E04834;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: white;

    & > * {
        display: block;
    }
`;