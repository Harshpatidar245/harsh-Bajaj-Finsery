import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' }
];

const Dropdown = ({ setFilters }) => {
  const handleChange = (selectedOptions) => {
    setFilters(selectedOptions.map(option => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      placeholder="Select data to display"
    />
  );
};

export default Dropdown;
