import { connect } from 'react-redux';
import actionOperation from '../../redux/contacts/actionOperetion';
import selectors from '../../redux/contacts/selectors';
import Filter from './filter';

const mapStateToProps = state => {
  return {
    value: selectors.getFilter(state),
  };
};

const mapDispatchToProps = {
  changeOnFilter: actionOperation.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);