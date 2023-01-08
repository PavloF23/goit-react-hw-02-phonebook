import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
    return (
        <ul>
          {contacts.map(({ contact }) => (
          <li key={contact.id} contact={contact} >
          </li>
          ))}
        </ul>        
      );
    }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  // deleteContact: PropTypes.func.isRequired,
};