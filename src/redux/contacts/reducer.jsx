import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actionOperation from './actionOperetion';

const addContactMore = (state, action) => {
        return [...state, action.payload];
};
const deleteOnContact = (state, action) => state.filter(contact => contact.id !== action.payload);
const changeOnFilter = (_, action) => action.payload;
const arrayItems = createReducer([], {
    [actionOperation.fetchContactSuccess]: (_, action) => action.payload,
    [actionOperation.addContactSuccess]: addContactMore,
    [actionOperation.removeContactSuccess]: deleteOnContact,
});
const filter = createReducer('', {
    [actionOperation.changeFilter]: changeOnFilter,
});


export default combineReducers({
    arrayItems,
    filter,
});