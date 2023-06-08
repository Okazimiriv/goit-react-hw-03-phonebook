import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import { FilterBlock, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const id = shortId.generate();

  return (
    <FilterBlock>
      <FilterLabel htmlFor={id}>Find Contacts by name</FilterLabel>
      <FilterInput
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Enter contact's name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title=" Enter name may contain only letters, apostrophe, dash and spaces."
      />
    </FilterBlock>
  );
};

export default Filter;

PropTypes.Filter = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
