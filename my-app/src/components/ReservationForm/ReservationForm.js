import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Input, ErrorBar } from '../../globalStyles/GlobalStyles';
import Label from '../Label/Label';
import { Form, InputWrapper, TitleBar, Wrapper } from './styles/ReservationForm';
import { Select, Option } from '../../globalStyles/GlobalStyles';
import { useTranslation } from 'react-i18next';

export default function ReservationForm(props) {
    const { register, handleSubmit, watch, errors, clearErrors, reset } = useForm();
    const [clients, setClients] = useState([]);
    const [reservation, setReservation] = useState({ _id: "", tableNumber: "", date: "", table_id: "" });
    const [selectValue, setSelectValue] = useState("");
    const [errorsArray, setErrorsArray] = useState([]);
    const [tables, setTables] = useState([]);
    const [selectValueTable, setSelectValueTable] = useState("");
    let history = useHistory();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:9000/clients/getClients`)
            .then(res => {
                const data = res.data;
                setClients(data);
                if (data.length > 0) {
                    setSelectValue(data[0]._id);
                }
            });

        axios.get(`http://localhost:9000/tables/getTables`)
            .then(res => {
                const data = res.data;
                setTables(data);
                if (data.length > 0) {
                    setSelectValueTable(data[0]._id);
                }
            });

        if (props.reservationId !== 0) {
            axios.get(`http://localhost:9000/reservations/getReservation/${props.reservationId}`)
                .then(res => {
                    const data = res.data;
                    setReservation({ _id: data._id, tableNumber: data.table.tableNumber, date: getDate(data.date), table_id: data.table_id });
                    setSelectValueTable(data.table_id);
                    setSelectValue(data.client_id);
                });
        }
    }, []);


    function getDate(date) {
        var currentdate = new Date(date);
        var year = currentdate.getFullYear();
        var month = currentdate.getMonth() + 1;
        var day = currentdate.getDate();
        return [year,
            (month > 9 ? '' : '0') + month,
            (day > 9 ? '' : '0') + day
        ].join('-') + 'T' + [(currentdate.getHours() > 9 ? '' : '0') + currentdate.getHours(), (currentdate.getMinutes() > 9 ? '' : '0') + currentdate.getMinutes(), "00.000Z"].join(':');
    }

    const handleClick = (data) => {

        setErrorsArray([]);

        console.log(data);
        console.log(selectValue);
        console.log(selectValueTable);
        console.log(clients);

        if (props.reservationId === 0) {
            axios.post('http://localhost:9000/reservations/createReservation', {
                client_id: selectValue,
                table_id: selectValueTable,
                date: data.dateForm
            })
                .then(function (response) {
                    history.push("/reservations");
                })
                .catch(function (error) {
                    if (error.response) {
                        const err = [];
                        console.log(error.response)
                        error.response.data.map(errorItem => err.push(errorItem));
                        setErrorsArray(err);
                    }
                });
        } else {
            axios.post('http://localhost:9000/reservations/updateReservation', {
                _id: reservation._id,
                client_id: selectValue,
                table_id: selectValueTable,
                date: data.dateForm
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
        setSelectValue(event.target.value);
    }

    const handleChangeTable = (event) => {
        setSelectValueTable(event.target.value);
    }

    // return (
    //     <Wrapper>
    //         <TitleBar>{t('details.header.formReservation')}</TitleBar>
    //         <Form onSubmit={handleSubmit(handleClick)}>
    //             <InputWrapper>
    //                 <Label width="auto">{t('table.tableNumber')}:</Label>
    //                 <Select value={selectValueTable} onChange={handleChangeTable} isMargin>
    //                     {tables.map(table => <Option key={table._id} value={table._id}>{table.tableNumber}</Option>)}
    //                 </Select>
    //             </InputWrapper>
    //             <InputWrapper>
    //                 <Label width="auto">{t('reservation.date')}:</Label>
    //                 <Input width="300px" name="dateForm" type="datetime-local" ref={register({ required: true })} defaultValue={(reservation.date || '').toString().substring(0, 16)}></Input>
    //                 {errors.dateForm && errors.dateForm.type === "required" && <Label>{t('errors.required')}</Label>}
    //             </InputWrapper>
    //             <Label width="100%">{t('details.header.chooseClient')}:</Label>
    //             <Select value={selectValue} onChange={handleChange}>
    //                 {clients.map(client => <Option key={client._id} value={client._id}>{client.person.firstName} {client.person.surName} {client.phoneNumber}</Option>)}
    //             </Select>
    //             {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}
    //             <Input type="submit" value={t('functions.confirm')}></Input>
    //         </Form>
    //     </Wrapper >
    // );

    return (
        <Wrapper>
            <TitleBar>{t('details.header.formReservation')}</TitleBar>
            <Form onSubmit={handleSubmit(handleClick)}>
                <InputWrapper>
                    <Label width="auto">{t('table.tableNumber')}:</Label>
                    <Select value={selectValueTable} onChange={handleChangeTable} isMargin>
                        {tables.map(table => <Option key={table._id} value={table._id}>{table.tableNumber}</Option>)}
                    </Select>
                </InputWrapper>
                <InputWrapper>
                    <Label width="auto">{t('reservation.date')}:</Label>
                    <Input width="300px" name="dateForm" type="datetime-local" ref={register()} defaultValue={(reservation.date || '').toString().substring(0, 16)}></Input>
                    {errors.dateForm && errors.dateForm.type === "required" && <Label>{t('errors.required')}</Label>}
                </InputWrapper>
                <Label width="100%">{t('details.header.chooseClient')}:</Label>
                <Select value={selectValue} onChange={handleChange}>
                    {clients.map(client => <Option key={client._id} value={client._id}>{client.person.firstName} {client.person.surName} {client.phoneNumber}</Option>)}
                </Select>
                {errorsArray.length > 0 ? <ErrorBar>{errorsArray.map(errorItem => <span>{t(`errors.${errorItem.message}`)}</span>)}</ErrorBar> : <></>}
                <Input type="submit" value={t('functions.confirm')}></Input>
            </Form>
        </Wrapper >
    );
}