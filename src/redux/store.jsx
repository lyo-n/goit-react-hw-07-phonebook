import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './contacts/reducer';

const store = configureStore({
  reducer: {
    contacts: reducers,
  },
  middleware: [thunk],
});

export default store;