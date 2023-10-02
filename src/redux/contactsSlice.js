import { createSlice, createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: (() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  })(),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addContact, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export { addContact, deleteContact };
export default contactsSlice.reducer;
