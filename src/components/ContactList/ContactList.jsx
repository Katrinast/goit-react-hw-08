import css from './ContactList.module.css'

import Contact from "../Contact/Contact";

import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import {selectFilterContacts} from '../../redux/selectors'
export default function ContactList() {
  

  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilterContacts)
  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
<Contact data={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  )

}