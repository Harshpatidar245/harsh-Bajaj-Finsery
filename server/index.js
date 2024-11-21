const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper function to find the highest lowercase alphabet
const getHighestLowercaseAlphabet = (data) => {
  const lowercaseAlphabets = data.filter(char => /^[a-z]$/.test(char));
  return lowercaseAlphabets.sort().pop() || null;
};

// POST endpoint to process data
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ message: 'Invalid data format. Expected an array.' });
  }

  const numbers = [];
  const alphabets = [];

  // Separate numbers and alphabets
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
    }
  });

  const highestLowercaseAlphabet = getHighestLowercaseAlphabet(data);

  return res.status(200).json({
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
