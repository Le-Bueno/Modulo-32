
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contactsSlice';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: darkred;
  }
`;

const ContactList = ({ onEdit }) => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeContact(id));
    };

    return (
        <List>
            {contacts.map((contact) => (
                <ListItem key={contact.id}>
                    <div>
                        <div>{contact.name}</div>
                        <div>{contact.email}</div>
                        <div>{contact.phone}</div>
                    </div>
                    <div>
                        <button onClick={() => onEdit(contact)}>Editar</button>
                        <Button onClick={() => handleRemove(contact.id)}>Remover</Button>
                    </div>
                </ListItem>
            ))}
        </List>
    );
};

export default ContactList;
