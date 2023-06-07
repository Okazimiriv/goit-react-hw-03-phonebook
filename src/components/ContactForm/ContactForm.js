import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortId.generate();
  numberInputId = shortId.generate();

  // isContainsInputedName() {
  //   const { contacts } = this.props;
  //   const inputedName = this.state.name;
  //   return contacts.find(
  //     contact => contact.name.toLowerCase() === inputedName.toLowerCase()
  //   );
  // }

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // if (this.isContainsInputedName()) {
    //   alert(`${this.state.name} is already in contacts`);
    //   return;
    // }

    const data = this.state;
    this.props.onAddContact(data);

    this.setState({
      name: '',
      number: '',
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={styles.input}
          id={this.nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Harry Potter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={styles.label} htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className={styles.input}
          id={this.numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="765-43-21"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

PropTypes.ContactForm = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
