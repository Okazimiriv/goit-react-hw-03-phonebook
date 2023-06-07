import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={styles.item}>
            {' '}
            <p className={styles.contactInfo}>
              {name}:<span className={styles.name}>{number}</span>
            </p>
            <button
              className={styles.button}
              onClick={() => onDeleteContact(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
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
