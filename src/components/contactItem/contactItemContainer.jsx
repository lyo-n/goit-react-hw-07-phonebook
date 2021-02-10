import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import ContactItem from '../contactItem/contactItem';

const mapDispatchToProps  = (dispatch, ownProps) =>({
    removeOnContact: () =>
    dispatch(actions.deleteContact(ownProps.contact.id)),
});
      
export default connect(null, mapDispatchToProps)(ContactItem);

