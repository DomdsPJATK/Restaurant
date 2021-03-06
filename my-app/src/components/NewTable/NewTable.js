import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewTableContainer, Select } from './styles/NewTable';
import { InputWrapper, TitleBar, Wrapper, Checkbox } from './styles/NewTable';
import { ErrorBar, Input } from '../../globalStyles/GlobalStyles';
import Label from '../Label/Label';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const NewTable = (props) => {
    const [table, setTable] = useState({ _id: "", tableNumber: "", numberOfSeats: "" });
    const [isSterilized, setSterlizied] = useState(false);
    const { register, handleSubmit, watch, errors, clearErrors, reset } = useForm();
    const [errorsArray, setErrorsArray] = useState([]);
    let history = useHistory();
    const { t } = useTranslation();

    console.log(props)
    useEffect(() => {
        if (props.tableId !== 0) {
            axios.get(`http://localhost:9000/tables/getTable/${props.tableId}`)
                .then(res => {
                    const data = res.data;
                    setTable({ _id: data._id, tableNumber: data.tableNumber, numberOfSeats: data.seats });
                    setSterlizied(data.isSterilized);
                });
        }
    }, []);

    const handleClick = (data) => {

        setErrorsArray([]);

        if (props.tableId === 0) {
            axios.post('http://localhost:9000/tables/createTable', {
                tableNumber: data.tableNumber,
                seats: data.seatsNumber,
                isSterilized: isSterilized

            })
                .then(function (response) {
                    history.push("/");
                })
                .catch(function (error) {
                    if (error.response) {
                        const err = [];
                        console.log(error.response);
                        error.response.data.map(errorItem => err.push(errorItem));
                        setErrorsArray(err);
                    }
                });
        } else {
            axios.post('http://localhost:9000/tables/updateTable', {
                _id: table._id,
                tableNumber: data.tableNumber,
                seats: data.seatsNumber,
                isSterilized: isSterilized
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

    const handleChange = (event) => {
        setSterlizied(!isSterilized);
    }

    // return (
    //     <NewTableContainer>
    //         <Wrapper>
    //             <TitleBar>{t('details.header.formTable')}</TitleBar>
    //             <form onSubmit={handleSubmit(handleClick)}>
    //                 <InputWrapper>
    //                     <Label width="auto">{t('table.tableNumber')}:</Label>
    //                     <Input name="tableNumber" type="number" width="300px" ref={register({ required: true })} isBordered defaultValue={table.tableNumber}></Input>
    //                     {errors.tableNumber && errors.tableNumber.type === "required" && <Label>{t('errors.required')}</Label>}
    //                 </InputWrapper>

    //                 <InputWrapper>
    //                     <Label width="auto">{t('table.seats')}:</Label>
    //                     <Input name="seatsNumber" type="number" width="300px" ref={register({ required: true, min: 1, max: 10 })} isBordered defaultValue={table.numberOfSeats}></Input>
    //                     {errors.seatsNumber && errors.seatsNumber.type === "required" && <Label>{t('errors.required')}</Label>}
    //                     {errors.seatsNumber && errors.seatsNumber.type === "min" && <Label>{t('errors.min_1')}</Label>}
    //                     {errors.seatsNumber && errors.seatsNumber.type === "max" && <Label>{t('errors.max_10')}</Label>}
    //                 </InputWrapper>

    //                 <InputWrapper>
    //                     <Label width="auto">{t('table.sterilizedTrue')}:</Label>
    //                     {isSterilized ? <Checkbox name="isSterilized" onChange={handleChange} checked /> : <Checkbox name="isSterilized" onChange={handleChange} unchecked />}
    //                 </InputWrapper>

    //                 {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}

    //                 <Input type="submit" value={t('functions.confirm')}></Input>
    //             </form>
    //         </Wrapper>
    //     </NewTableContainer>
    // );

    return (
        <NewTableContainer>
            <Wrapper>
                <TitleBar>{t('details.header.formTable')}</TitleBar>
                <form onSubmit={handleSubmit(handleClick)}>
                    <InputWrapper>
                        <Label width="auto">{t('table.tableNumber')}:</Label>
                        <Input name="tableNumber" type="number" width="300px" ref={register()} isBordered defaultValue={table.tableNumber}></Input>
                        {errors.tableNumber && errors.tableNumber.type === "required" && <Label>{t('errors.required')}</Label>}
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto">{t('table.seats')}:</Label>
                        <Input name="seatsNumber" type="number" width="300px" ref={register()} isBordered defaultValue={table.numberOfSeats}></Input>
                        {errors.seatsNumber && errors.seatsNumber.type === "required" && <Label>{t('errors.required')}</Label>}
                        {errors.seatsNumber && errors.seatsNumber.type === "min" && <Label>{t('errors.min_1')}</Label>}
                        {errors.seatsNumber && errors.seatsNumber.type === "max" && <Label>{t('errors.max_10')}</Label>}
                    </InputWrapper>

                    <InputWrapper>
                        <Label width="auto">{t('table.sterilizedTrue')}:</Label>
                        {isSterilized ? <Checkbox name="isSterilized" onChange={handleChange} checked /> : <Checkbox name="isSterilized" onChange={handleChange} unchecked />}
                    </InputWrapper>

                    {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}

                    <Input type="submit" value={t('functions.confirm')}></Input>
                </form>
            </Wrapper>
        </NewTableContainer>
    );
}

export default NewTable;