export const selectFilteredContacts = state => {
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};

export const selectContacts = state => state.contacts.items;
