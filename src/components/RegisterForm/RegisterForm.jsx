import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegisterForm() {
  const idForForm = useId();
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value));
    actions.resetForm();
  }
  return (
    <Formik initialValues={
      {
        name: '',
        email: '',
        password: '',
     }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={`name-${idForForm}`}>
          Username
          <Field type="name" name="name" placeholder="Put your username" id={`name-${idForForm}`} />
          <ErrorMessage name='name'/>
        </label>
        <label htmlFor={`email-${idForForm}`}>
          Email
          <Field type="email" name="email" placeholder="Put your email" id={`email-${idForForm}`} />
          <ErrorMessage name='email'/>
        </label>
        <label htmlFor={`password-${idForForm}`}>
          Password
          <Field type="password" name="password" id={`password-${idForForm}`} placeholder="Put your password" />
          <ErrorMessage name='password'/>
        </label>
        <button type='submit'>Log in</button>
      </Form>
</Formik>
  )
}