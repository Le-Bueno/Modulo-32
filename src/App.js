// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [contactToEdit, setContactToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setContactToEdit(null);
  };

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      {showForm && (
        <ContactForm contactToEdit={contactToEdit} onClose={handleCloseForm} />
      )}
      <ContactList onEdit={handleEdit} />
      {!showForm && <button onClick={() => setShowForm(true)}>Adicionar Contato</button>}
    </Container>
  );
};

export default App;
