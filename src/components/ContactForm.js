
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../features/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = ({ contactToEdit, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (contactToEdit) {
            setName(contactToEdit.name);
            setEmail(contactToEdit.email);
            setPhone(contactToEdit.phone);
        }
    }, [contactToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            id: contactToEdit ? contactToEdit.id : Date.now(),
            name,
            email,
            phone,
        };
        if (contactToEdit) {
            dispatch(updateContact(contact));
        } else {
            dispatch(addContact(contact));
        }
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome Completo"
                required
            />
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
            />
            <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                required
            />
            <Button type="submit">Salvar</Button>
        </Form>
    );
};

export default ContactForm;
