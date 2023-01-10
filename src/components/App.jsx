import { Component } from 'react';
import { Container }  from './Container/Container';
import { AppStyle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

addContact = data => {
  if (
    !this.state.contacts.find(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLowerCase()
    )
  ) {this.setState(({ contacts }) => ({contacts: [...contacts, data],}));
}else {
  alert(`${data.name} is already in contacts.`);
}
};
 
changeFilter = evt => {
  this.setState({filter: evt.currentTarget.value});
}

deleteContact = contactId => {
  this.setState(({ contacts }) => ({
    contacts: contacts.filter(contact => contact.id !== contactId),
  }));
};

visibleContacts = () => {
  return  this.state.contacts.filter(contact =>
  contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),);
};

render() {
    
  return (
    <AppStyle>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />     
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        {this.state.contacts.length > 0 ? (
        <ContactList contacts={this.visibleContacts()} deleteContact={this.deleteContact} />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    </AppStyle>
  );
};
};