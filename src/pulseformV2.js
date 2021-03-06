import React, {Component} from 'react';
import {Formik, Form, useField} from 'formik'


const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyTextArea = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="textArea" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelectInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <div className={'selectDiv'}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const validate = values => {
    const  errors = {};

    if (!values.date || values.date.toString().trim() === '') {
        errors.date = 'Введите значение';
    } else if (values.date.toString().length > 20) {
        errors.date = 'Должно быть меньше 20 символов';
    }

    if (!values.time || values.time.toString().trim() === '') {
        errors.time = 'Введите значение';
    } else if (values.time.toString().length > 10) {
        errors.time = 'Должно быть меньше 10 символов';
    }

    if (!values.upperPressure || values.upperPressure.toString().trim() === '') {
        errors.upperPressure = 'Введите значение';
    } else if (values.upperPressure.toString().length > 3) {
        errors.upperPressure = 'Должно быть меньше 3 символов';
    }

    if (!values.lowerPressure || values.lowerPressure.toString().trim() === '') {
        errors.lowerPressure = 'Введите значение';
    } else if (values.lowerPressure.toString().length > 3) {
        errors.lowerPressure = 'Должно быть меньше 3 символов';
    }
    else if (values.lowerPressure >= values.upperPressure){
        errors.lowerPressure = 'Нижняя граница давления не может быть больше или равна верхней';
    }

    if (!values.pulse || values.pulse.toString().trim() === '') {
        errors.pulse = 'Введите значение';
    } else if (values.pulse.toString().length > 3) {
        errors.pulse = 'Должно быть меньше 3 символов';
    }

    if (!values.hand || values.hand === '') {
        errors.hand = 'Выберите значение';
    }

    return errors;
}

const PulseForm = () =>{

    return(
        <Formik
            initialValues={{
                date: new Date().toISOString().substr(0,10),
                time: new Date().toLocaleTimeString().substr(0,5),
                upperPressure: '',
                lowerPressure: '',
                pulse: '',
                hand: '',
                comment: '',
            }}
            validate={validate}
            onSubmit={(values, actions) => {

                const dataBase = JSON.parse(localStorage.getItem('baseOfValues'));
                dataBase.push(values);
                localStorage.setItem('baseOfValues', JSON.stringify(dataBase));
                actions.setSubmitting(false);
                actions.resetForm();
            }}
        >
            <Form>
                <MyTextInput label={'Дата'} name={'date'}  type={'date'} />
                <MyTextInput label={'Время'} name={'time'}  type={'time'} />
                <MyTextInput label={'Верхняя граница давления'} name={'upperPressure'}  type={'number'} placeholder={'120'}/>
                <MyTextInput label={'Нижняя граница давления'} name={'lowerPressure'}  type={'number'} placeholder={'80'}/>
                <MyTextInput label={'Пульс'} name={'pulse'}  type={'number'} placeholder={'73'}/>
                <MySelectInput label={'Рука'} name={'hand'}>
                    <option value={''}>Выберите руку</option>
                    <option value={'Левая'}>Левая</option>
                    <option value={'Правая'}>Правая</option>
                </MySelectInput>
                <MyTextArea label={'Комментарий'} name={'comment'} type={'text'} placeholder={'Комментарий'} />
                <button type={'Submit'}>Отправить</button>
            </Form>

        </Formik>
    )
}

export default PulseForm
