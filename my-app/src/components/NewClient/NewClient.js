import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputWrapper, TitleBar, Wrapper, NewClientContainer } from './styles/NewClient';
import Label from '../Label/Label';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, ErrorBar } from '../../globalStyles/GlobalStyles';
import { useTranslation } from 'react-i18next';

const NewClient = (props) => {
    const [client, setClient] = useState({ _id: "", surName: "", firstName: "", phoneNumber: "" });
    const { register, handleSubmit, watch, errors } = useForm();
    const [errorsArray, setErrorsArray] = useState([]);
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        if (props.clientId !== 0) {
            axios.get(`http://localhost:9000/clients/getClient/${props.clientId}`)
                .then(res => {
                    const data = res.data;
                    setClient({ _id: data._id, surName: data.person.surName, firstName: data.person.firstName, phoneNumber: data.phoneNumber });
                });
        }
    }, []);

    const handleClick = (data) => {

        setErrorsArray([]);

        if (props.clientId === 0) {
            axios.post('http://localhost:9000/clients/createClient', {
                firstName: data.firstname,
                surName: data.surname,
                phoneNumber: data.phonenumber
            })
                .then(function (response) {
                    history.push("/clients");
                })
                .catch(function (error) {
                    if (error.response) {
                        const err = [];
                        error.response.data.map(errorItem => err.push(errorItem));
                        setErrorsArray(err);
                    }
                });
        } else {
            axios.post('http://localhost:9000/clients/updateClient', {
                _id: client._id,
                firstName: data.firstname,
                surName: data.surname,
                phoneNumber: data.phonenumber
            })
                .then(function (response) {
                    history.goBack();
                })
                .catch(function (error) {
                    if (error.response) {
                        const err = [];
                        error.response.data.map(errorItem => err.push(errorItem));
                        setErrorsArray(err);
                    }
                });
        }
    }

    // return (
    //     <NewClientContainer>
    //         <Wrapper>
    //             <TitleBar>{t('details.header.formClient')}</TitleBar>
    //             <form onSubmit={handleSubmit(handleClick)}>
    //                 <InputWrapper>
    //                     <Label width="auto">{t('client.name')}:</Label>
    //                     <Input name="firstname" ref={register({ required: true, minLength: 3, maxLength: 20, pattern: /^[a-zA-Z]/ })} type="text" width="300px" isBordered defaultValue={client.firstName}></Input>
    //                     {errors.firstname && errors.firstname.type === "required" && <Label>{t('errors.required')}</Label>}
    //                     {errors.firstname && errors.firstname.type === "minLength" && <Label>{t('errors.len_3_20')}</Label>}
    //                     {errors.firstname && errors.firstname.type === "maxLength" && <Label>{t('errors.len_3_20')}</Label>}
    //                     {errors.firstname && errors.firstname.type === "pattern" && <Label>{t('errors.patternName')}</Label>}
    //                 </InputWrapper>

    //                 <InputWrapper>
    //                     <Label width="auto">{t('client.surname')}:</Label>
    //                     <Input name="surname" type="text" width="300px" ref={register({ required: true, minLength: 3, maxLength: 20, pattern: /^[a-zA-Z]/ })} isBordered defaultValue={client.surName}></Input>
    //                     {errors.surname && errors.surname.type === "required" && <Label>{t('errors.required')}</Label>}
    //                     {errors.surname && errors.surname.type === "minLength" && <Label>{t('errors.len_3_20')}</Label>}
    //                     {errors.surname && errors.surname.type === "maxLength" && <Label>{t('errors.len_3_20')}</Label>}
    //                     {errors.surname && errors.surname.type === "pattern" && <Label>{t('errors.patternSurname')}</Label>}
    //                 </InputWrapper>

    //                 <InputWrapper>
    //                     <Label width="auto">{t('client.phoneNumber')}:</Label>
    //                     <Input name="phonenumber" type="text" width="300px" ref={register({ required: true, pattern: /\b[0-9]{9}\b/ })} isBordered defaultValue={client.phoneNumber}></Input>
    //                     {errors.phonenumber && errors.phonenumber.type === "pattern" && <Label>{t('errors.phoneValidation')}</Label>}
    //                     {errors.phonenumber && errors.phonenumber.type === "required" && <Label>{t('errors.required')}</Label>}
    //                 </InputWrapper>

    //                 {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}
    //                 <Input type="submit" value={t('functions.confirm')}></Input>
    //             </form>
    //         </Wrapper>
    //     </NewClientContainer >
    // );

    return (
        <NewClientContainer>
            <Wrapper>
                <TitleBar>{t('details.header.formClient')}</TitleBar>
                <form onSubmit={handleSubmit(handleClick)}>
                    <InputWrapper>
                        <Label width="auto">{t('client.name')}:</Label>
                        <Input name="firstname" ref={register()} type="text" width="300px" isBordered defaultValue={client.firstName}></Input>
                        {errors.firstname && errors.firstname.type === "required" && <Label>{t('errors.required')}</Label>}
                        {errors.firstname && errors.firstname.type === "minLength" && <Label>{t('errors.len_3_20')}</Label>}
                        {errors.firstname && errors.firstname.type === "maxLength" && <Label>{t('errors.len_3_20')}</Label>}
                        {errors.firstname && errors.firstname.type === "pattern" && <Label>{t('errors.patternName')}</Label>}
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto">{t('client.surname')}:</Label>
                        <Input name="surname" type="text" width="300px" ref={register()} isBordered defaultValue={client.surName}></Input>
                        {errors.surname && errors.surname.type === "required" && <Label>{t('errors.required')}</Label>}
                        {errors.surname && errors.surname.type === "minLength" && <Label>{t('errors.len_3_20')}</Label>}
                        {errors.surname && errors.surname.type === "maxLength" && <Label>{t('errors.len_3_20')}</Label>}
                        {errors.surname && errors.surname.type === "pattern" && <Label>{t('errors.patternSurname')}</Label>}
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto">{t('client.phoneNumber')}:</Label>
                        <Input name="phonenumber" type="text" width="300px" ref={register()} isBordered defaultValue={client.phoneNumber}></Input>
                        {errors.phonenumber && errors.phonenumber.type === "pattern" && <Label>{t('errors.phoneValidation')}</Label>}
                        {errors.phonenumber && errors.phonenumber.type === "required" && <Label>{t('errors.required')}</Label>}
                    </InputWrapper>

                    {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}
                    <Input type="submit" value={t('functions.confirm')}></Input>
                </form>
            </Wrapper>
        </NewClientContainer >
    );
}

export default NewClient;