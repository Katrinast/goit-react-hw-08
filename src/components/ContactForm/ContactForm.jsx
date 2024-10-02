
import { useId } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';
import {addContact} from '../../redux/contactsOps'

import css from './ContactForm.module.css'

const initialValues = {
  name: "",
  number: "",
}

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Required").trim(),
  number: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Required").trim(),
});


export default function ContactForm() {

  const dispatch = useDispatch();


  const idForForm = useId();
  const handlerSubmit = (values, actions) => {
  dispatch(addContact(values));
  actions.resetForm();
};
  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <div className={css.nameBox}>
        <label htmlFor={`name-${idForForm}`}>Name</label>
          <Field type="text" name="name" id={`name-${idForForm}`} placeholder="Mike Holms" />
          <ErrorMessage name="name" />
      </div>
        <div className={css.numberBox}>
          <label htmlFor={`number-${idForForm}`}>Number</label>
          <Field type="text" name="number" id={`number-${idForForm}`} placeholder="000-00-00" />
          <ErrorMessage name="number" />
          </div>
				<button type="submit">Add contact</button>
			</Form>
    </Formik>
  )
  
}