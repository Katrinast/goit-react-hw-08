import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectLoading } from '../../redux/contacts/selectors'
import { selectError } from '../../redux/contacts/selectors'
import {selectContacts} from '../../redux/contacts/selectors'
import { useEffect } from 'react';
import {fetchContacts} from '../../redux/contacts/operations'
 
export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      
    {contacts.length > 0 && <SearchBox />}
      
      {!contacts.length && <p>Create your first contact</p>}
      <ContactList />  
      {isError && <p>Something went wrong! Try again later</p>}
      
  
</div>
  )
}