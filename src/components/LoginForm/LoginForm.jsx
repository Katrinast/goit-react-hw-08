import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectLoading } from '../../redux/contacts/selectors';

import css from "./LoginForm.module.css"

export default function LoginForm() {
  const idForForm = useId();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
    actions.resetForm()
  }
  return (
    <Formik initialValues= {{email: '', password: ''}} onSubmit={handleSubmit}>
      <Form className={css.form}>
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
        <button className={css.btn} type='submit' disabled={isLoading}>Log in</button>
      </Form>
</Formik>
  )
}