import PropTypes from 'prop-types';
import { List, Item, Contact, Button } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";

export function ContactList({ contacts, deleteContact }) {
    return (
        <List>
          {contacts.map( contact  => (
          <Item key={contact.id} contact={contact} >
            <Contact><AiFillPhone/> {contact.name}: {contact.number}</Contact>    
            <Button type='button' onClick={() => deleteContact(contact.id)}><AiTwotoneDelete/> Delete</Button>
          </Item>
          ))}
        </List>        
      );
    }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};