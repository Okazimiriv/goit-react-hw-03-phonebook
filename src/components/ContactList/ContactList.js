import PropTypes from 'prop-types';
import {
  ContactListBlock,
  ContactItem,
  ContactInfo,
  ContactName,
  ContactButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListBlock>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem key={id}>
            {' '}
            <ContactInfo>
              {name}:<ContactName>{number}</ContactName>
            </ContactInfo>
            <ContactButton onClick={() => onDeleteContact(id)} type="button">
              Delete
            </ContactButton>
          </ContactItem>
        );
      })}
    </ContactListBlock>
  );
};

PropTypes.ContactList = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
