import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');

const deleteContact = createAction('contacts/remove');

const changeFilter = createAction('contscts/changeFilter');


const exp = {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    deleteContact, 
    changeFilter,
};

export default exp;