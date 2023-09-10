import React from 'react';
import PageHeader from "./page-header/page-header";
import ContactDetails from "./contact-details/contact-details";
import FormDetails from "./Form-details/Form-details";
import NewLetter from "../about/newsletter/NewLetter";

const Contact = () => {
    return (
        <>
            <PageHeader/>
            <ContactDetails/>
            <FormDetails/>
            <NewLetter/>
        </>
    );
};

export default Contact;