import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import '../index.css';

export const App = () => {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '600px', padding: '0 20px', margin: '0 auto' }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
