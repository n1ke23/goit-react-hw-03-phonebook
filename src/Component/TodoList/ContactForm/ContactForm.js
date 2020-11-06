import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import './ContactForm.css'

const ContactForm = ({ setObj, obj }) => {

    const [objForm, setObjForm] = useState({ name: '', number: '' });
    const inputHandler = ({ target }) => {
        const { value, name } = target;
        setObjForm(prev => ({ ...prev, [name]: value }));
    };

    const addContact = (e) => {
        e.preventDefault();
        const { name, number } = objForm;
        if (obj.contacts.find(el => el.name === name)) {
            alert(`${name} уже записанно, введите другое имя!`)
        } else {
            setObj(prev => ({ ...prev, contacts: [...prev.contacts, { id: uuidv4(), name, number }] }));
        }
        setObjForm({ name: '', number: '' });
    };

    return (
        <>
            <form className="form" onSubmit={addContact}>
                <p className="form-text">Name</p>
                <input className="input-form"
                    type="text"
                    name="name"
                    value={objForm.name}
                    onChange={inputHandler}
                />
                <p className="form-text">Number</p>
                <input className="input-form"
                    type="tel"
                    name="number"
                    value={objForm.number}
                    onChange={inputHandler}
                />
                <button className="contact-form-btn" type='submit'>Add contact</button>
            </form>



        </>
    );
};

export default ContactForm;


ContactForm.propTypes = {
    setObj: PropTypes.func.isRequired,
}