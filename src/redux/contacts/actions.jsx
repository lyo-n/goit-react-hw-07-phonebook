import axios from 'axios';
import actionOperation from './actionOperetion';
  
axios.defaults.baseURL = 'http://localhost:5555/';

const fetchContacts = () => dispatch => {
    dispatch(actionOperation.fetchContactRequest());
      axios.get('contacts')
      .then(({ data }) => dispatch(actionOperation.fetchContactSuccess(data)))
      .catch(error => dispatch(actionOperation.fetchContactError(error)));
  };

  const addContact = (name, number) => dispatch => {
    dispatch(actionOperation.addContactRequest());
    axios
      .post('contacts', {
        name,
        number,
      })
      .then(({ data }) => dispatch(actionOperation.addContactSuccess(data)))
      .catch(error => dispatch(actionOperation.addContactError(error)));
  };

const deleteContact = id => dispatch => {
    dispatch(actionOperation.removeContactRequest());
      axios
      .delete(`contacts/${id}`)
      .then(() => dispatch(actionOperation.removeContactSuccess(id)))
      .catch(error => dispatch(actionOperation.removeContactError(error)));
  };

const expAction = {
    fetchContacts,
    addContact,
    deleteContact
};

export default expAction;


