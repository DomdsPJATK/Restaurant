import styled from 'styled-components/macro';

export const LabelStyled = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    width: ${props => props.width || "100%"};
    background-color: orange;
    color: white;
    height: 50px;
    padding: 20px;
`;