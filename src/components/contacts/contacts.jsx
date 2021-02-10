import React from 'react';
import styles from './contacts.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from '../contactItem/contactItemContainer';
import propTypes from 'prop-types';

const itemsStyles = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
};

const ContactList = ({contacts}) => {
    return(
     <TransitionGroup component="ul">
       {contacts && contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={250} classNames={itemsStyles}>
           <ContactItem contact={contact} />
        </CSSTransition>
       ))} 
     </TransitionGroup>
    );
};  

ContactList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
    }),),
};

export default ContactList;
