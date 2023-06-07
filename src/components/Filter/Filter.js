import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const id = shortId.generate();

  return (
    <div className={styles.filter}>
      <label htmlFor={id} className={styles.label}>
        Find Contacts by name
      </label>
      <input
        className={styles.input}
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Enter contact's name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title=" Enter name may contain only letters, apostrophe, dash and spaces."
      />
    </div>
  );
};

export default Filter;

PropTypes.Filter = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
