import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contactsSlice';
import filterReducer from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  const { contacts } = store.getState();
  localStorage.setItem('contacts', JSON.stringify(contacts));
});
