import PropTypes from 'prop-types';
import { List, Item, Contact, Button } from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
    return (
        <List>
          {contacts.map( contact  => (
          <Item key={contact.id} contact={contact} >
            <Contact>{contact.name}: {contact.number}</Contact>    
            <Button type='button' onClick={() => deleteContact(contact.id)}>Delete</Button>
          </Item>
          ))}
        </List>        
      );
    }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};