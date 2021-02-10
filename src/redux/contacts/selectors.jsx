import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.arrayItems;
const getFilter = state => state.contacts.filter;

const selectContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts && contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const selectors = {
  selectContacts,
  getContacts,
  getFilter,
};

export default selectors;