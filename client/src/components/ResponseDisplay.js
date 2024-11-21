import React from 'react';

const ResponseDisplay = ({ responseData, filters }) => {
  if (!responseData) return null;

  const { numbers, alphabets, highest_lowercase_alphabet } = responseData;

  const dataToShow = {
    numbers,
    alphabets,
    highest_lowercase_alphabet
  };

  return (
    <div>
      {filters.map(filter => (
        <div key={filter}>
          <h4>{filter.replace('_', ' ').toUpperCase()}</h4>
          <p>{dataToShow[filter]?.join(', ') || 'No data'}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponseDisplay;
