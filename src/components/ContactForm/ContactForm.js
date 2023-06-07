import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const initialValues = {
  name: ' ',
  number: ' ',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

// const ErrorText = styled.p`
//   color: red;
// `;

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

class ContactForm extends Component {
  // export const ContactForm = () => {
  handleSubmit = (values, { resetForm }) => {
    console.log('values', values);

    resetForm();
  };

  render() {
    //   const { name, number } = this.state;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off" className={styles.ContactForm}>
          {/* <label className={styles.label} htmlFor={this.nameInputId}> */}
          <label className={styles.label}>Name</label>
          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="Harry Potter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
          {/* <label className={styles.label} htmlFor={this.numberInputId}> */}
          <label className={styles.label}>Number</label>
          <Field
            className={styles.input}
            type="tel"
            name="number"
            placeholder="765-43-21"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
