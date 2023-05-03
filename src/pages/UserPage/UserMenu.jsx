import { ContactsList } from 'components/contactsList/ContactsList';
import { FindContactForm } from 'components/findContact/FindContactForm';
import { AddContactForm } from 'components/addForm/AddContactsForm';

export const ContactsPage = () => {
  return (
    <>
      <div>
        <p>My page: {}</p>
        <button>Logout</button>
      </div>
      <div>
        <h1>Contacts</h1>
        <FindContactForm />
        <ContactsList />
        <AddContactForm />
      </div>
    </>
  );
};
