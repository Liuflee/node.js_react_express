import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className='input' onSubmit={handleSubmit}> {/* Se crea un input */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      /> 
      <button className='raised-button' type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
