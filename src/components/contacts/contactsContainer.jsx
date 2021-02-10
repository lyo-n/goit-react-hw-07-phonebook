import { connect } from 'react-redux';
import selectors from '../../redux/contacts/selectors';
import ContactList from '../contacts/contacts';

const mapStateToProps = state => {
    if (state.contacts) {
      return {
        contacts: selectors.selectContacts(state),
      };
    }
  };
  
  export default connect(mapStateToProps)(ContactList);