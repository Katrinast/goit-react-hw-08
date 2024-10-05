import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const idForForm = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
    actions.resetForm()
  }
  return (
    <Formik initialValues= {{email: '', password: ''}} onSubmit={handleSubmit}>
      <Form>
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