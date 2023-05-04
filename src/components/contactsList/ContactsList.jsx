import { Contact } from '../contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilterdData } from 'Redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  return   <ul>
      {contacts.length && contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
};
