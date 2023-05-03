import { Contact } from '../contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilterdData } from 'Redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilterdData);
  return   <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
};
