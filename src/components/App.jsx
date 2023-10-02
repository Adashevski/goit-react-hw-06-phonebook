import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontWeight: 500,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
