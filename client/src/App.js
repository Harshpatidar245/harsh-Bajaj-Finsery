import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  React.useEffect(() => {
    document.title = '0827IT211041'; 
  }, []);

  return (
    <div>
      <h1>0827IT211041</h1>
      <JsonInput setResponseData={setResponseData} setShowDropdown={setShowDropdown} />
      {showDropdown && <Dropdown setFilters={setFilters} />}
      <ResponseDisplay responseData={responseData} filters={filters} />
    </div>
  );
};

export default App;
