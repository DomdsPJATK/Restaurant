import React from 'react';
import { NewTableContainer } from './styles/NewTable';
import { InputWrapper, TitleBar, Wrapper } from './styles/NewTable';
import Input from '../Input/Input';
import Label from '../Label/Label';
import { useHistory } from 'react-router-dom';

const NewTable = (props) => {

    let history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <NewTableContainer>
            <Wrapper>
                <TitleBar>Modyfikuj/Dodaj stolik</TitleBar>
                <form>
                    <InputWrapper>
                        <Label width="auto"> Numer stolika:</Label>
                        <Input type="text" width="300px" isBordered placeholder={props.details.tableId}></Input>
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto"> Liczba miejsc:</Label>
                        <Input type="text" width="300px" isBordered placeholder={props.details.numberOfSeats}></Input>
                    </InputWrapper>

                    <Input type="button" value="Wyślij" onClick={() => handleClick()}></Input>
                </form>
            </Wrapper>
        </NewTableContainer>
    );
}

export default NewTable;