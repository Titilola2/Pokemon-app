import React from 'react';
import SearchBar from './SearchBar';

// Parent component
function ParentComponent() {
  const handleSearch = (searchTerm) => {
    // Implement the search logic here using the searchTerm
    console.log(`Performing search for: ${searchTerm}`);
  };

  return <ChildComponent onSearch={handleSearch} />;
}

// Child component
function ChildComponent({ onSearch }) {
  const handleInputChange = (event) => {
    // Call the onSearch function
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default ParentComponent;
