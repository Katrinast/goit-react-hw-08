import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from "./RegisterForm.module.css"

export default function RegisterForm() {
  const idForForm = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  }
  return (
    <Formik initialValues={
      {
        name: '',
        email: '',
        password: '',
     }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={`name-${idForForm}`}>
          Username
          <Field className={css.input} type="name" name="name" placeholder="Put your username" id={`name-${idForForm}`} />
          <ErrorMessage name='name'/>
        </label>
        <label className={css.label} htmlFor={`email-${idForForm}`}>
          Email
          <Field className={css.input} type="email" name="email" placeholder="Put your email" id={`email-${idForForm}`} />
          <ErrorMessage name='email'/>
        </label>
        <label className={css.label} htmlFor={`password-${idForForm}`}>
          Password
          <Field className={css.input} type="password" name="password" id={`password-${idForForm}`} placeholder="Put your password" />
          <ErrorMessage name='password'/>
        </label>
        <button className={css.btn} type='submit'>Log in</button>
      </Form>
</Formik>
  )
}