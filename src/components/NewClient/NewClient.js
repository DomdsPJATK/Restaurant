import React from 'react';
import { InputWrapper, TitleBar, Wrapper, NewClientContainer } from './styles/NewClient';
import Input from '../Input/Input';
import Label from '../Label/Label';
import { useHistory } from 'react-router-dom';

const NewClient = (props) => {
    let history = useHistory();

    function handleClick() {
        history.push("/clients");
    }

    return (
        <NewClientContainer>
            <Wrapper>
                <TitleBar>Modyfikuj/Dodaj klienta</TitleBar>
                <form>
                    <InputWrapper>
                        <Label width="auto"> Imię:</Label>
                        <Input type="text" width="300px" isBordered placeholder={props.clientFormDetails.name}></Input>
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto"> Nazwisko:</Label>
                        <Input type="text" width="300px" isBordered placeholder={props.clientFormDetails.surname}></Input>
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto"> Numer telefonu:</Label>
                        <Input type="text" width="300px" isBordered placeholder={props.clientFormDetails.phoneNumber}></Input>
                    </InputWrapper>

                    <Input type="button" value="Wyślij" onClick={() => handleClick()}></Input>
                </form>
            </Wrapper>
        </NewClientContainer>
    );
}

export default NewClient;