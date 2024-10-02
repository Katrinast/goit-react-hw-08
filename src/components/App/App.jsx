import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectError, selectLoading } from '../../redux/selectors'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'



export default function App() {
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
