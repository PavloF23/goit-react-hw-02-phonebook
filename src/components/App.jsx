import { Component } from 'react';
import { Container }  from './Container/Container';
import { AppStyle, Phonebook, Contacts } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';



export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = data => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }))
    console.log(data); 
  }

  render() {
  return (
    <AppStyle
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Container>
      <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={this.addContact} />
     
      <Contacts>Contacts</Contacts>
      <ContactList 
      contacts={this.state.contacts}
      />
      </Container>
    </AppStyle>
  );
};
};