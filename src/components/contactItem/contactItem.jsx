import React from 'react';
import styles from '../contacts/contacts.module.css';
import propTypes from 'prop-types';


const ContactItem = 
    ({ contact: {name, number }, removeOnContact }) => {
            return(
            <li className={styles.item}>
            {name}: {number}
            {<button className={styles.btn} type="button" name="delete" onClick={removeOnContact}>Delete</button>}
        </li>
        );
    };

ContactItem.propTypes = {
    removeOnContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
        }),
    ),
};
export default ContactItem;
