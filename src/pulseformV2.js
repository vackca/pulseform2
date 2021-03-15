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

    if (!values.date || values.date.trim() === '') {
        errors.date = 'Введите значение';
    } else if (values.date.length > 15) {
        errors.date = 'Должно быть меньше 15 символов';
    }

    if (!values.time || values.time.trim() === '') {
        errors.time = 'Введите значение';
    } else if (values.time.length > 10) {
        errors.time = 'Должно быть меньше 10 символов';
    }

    if (!values.upperPressure || values.upperPressure.trim() === '') {
        errors.upperPressure = 'Введите значение';
    } else if (values.upperPressure.length > 5) {
        errors.upperPressure = 'Должно быть меньше 5 символов';
    }

    if (!values.lowerPressure || values.lowerPressure.trim() === '') {
        errors.lowerPressure = 'Введите значение';
    } else if (values.lowerPressure.length > 5) {
        errors.lowerPressure = 'Должно быть меньше 5 символов';
    }

    if (!values.pulse || values.pulse.trim() === '') {
        errors.pulse = 'Введите значение';
    } else if (values.pulse.length > 5) {
        errors.pulse = 'Должно быть меньше 5 символов';
    }

    if (!values.hand || values.hand.trim() === '') {
        errors.hand = 'Выберите значение';
    }

    return errors;

}

const PulseForm = () =>{
    return(
        <Formik
            initialValues={{
                date: '',
                time: '',
                upperPressure: '',
                lowerPressure: '',
                pulse: '',
                hand: '',
                comment: '',
            }}
            validate={validate}
            onSubmit={(values, {setSubmitting}) => {
                console.log(Object.values(values));

                setSubmitting(false);
                const dataBase = JSON.parse(localStorage.getItem('baseOfValues'));
                dataBase.push(Object.values(values));
                localStorage.setItem('baseOfValues', JSON.stringify(dataBase));
            }}
        >
            <Form>
                <MyTextInput label={'Дата'} name={'date'}  type={'text'} placeholder={'18.03.2021'}/>
                <MyTextInput label={'Время'} name={'time'}  type={'text'} placeholder={'16:23'}/>
                <MyTextInput label={'Верхняя граница давления'} name={'upperPressure'}  type={'text'} placeholder={'120'}/>
                <MyTextInput label={'Нижняя граница давления'} name={'lowerPressure'}  type={'text'} placeholder={'80'}/>
                <MyTextInput label={'Пульс'} name={'pulse'}  type={'text'} placeholder={'73'}/>
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
