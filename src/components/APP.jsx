import React from 'react';
import ContactForm from './contactForm/contactFormContainer';
import Filter from './filter/filterContainer';
import ContactList from './contacts/contactsContainer';
import Logo from './logo/logo';
import  './app/app.module.css';


const APP = () =>{
    return (
        <div>
        <Logo />
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
        
    </div>
    );
};

export default APP;


