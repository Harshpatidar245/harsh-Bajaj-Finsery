import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponseData, setShowDropdown }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      // Validate JSON format
      const parsedJson = JSON.parse(jsonInput);

      // Make POST request to backend API
      const response = await axios.post('http://localhost:3000/bfhl', {
        data: parsedJson.data,
        file_b64: parsedJson.file_b64 || ''
      });

      setResponseData(response.data);
      setShowDropdown(true);
      setError('');
    } catch (err) {
      setError('Invalid JSON or API error. Please try again.');
    }
  };

  return (
    <div>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter JSON input here"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default JsonInput;
