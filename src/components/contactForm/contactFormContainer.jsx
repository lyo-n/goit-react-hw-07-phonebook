import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import ContactForm from './contactForm';

const mapStateToProps = state => ({
    state,
  });
  
export default connect(mapStateToProps, {onSubmit: actions.addContact})(ContactForm);
  
