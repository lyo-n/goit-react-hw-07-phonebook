import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/contacts/actions';
import selectors from '../redux/contacts/selectors';
import APP from './APP';

class APPContainer extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    }
    render() {
        return <APP {...this.props} />;
    }
}

const mapStateToProps = state => {
    return {
      contacts: selectors.getContacts(state),
    };
};

const mapDispatchToProps = dispatch => ({
    onFetchContacts: () => dispatch(actions.fetchContacts()),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(APPContainer);

