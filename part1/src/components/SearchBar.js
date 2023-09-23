import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({onSearch}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<form className='formulario-container' onSubmit={handleSubmit}> {/* Se crea un input */}
			<input
				type="text"
				placeholder="Buscar..."
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<button className='raised-button' type="submit">Buscar</button>
		</form>
	);
};

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired, // Espera que 'onSearch' sea una función y es requerida
};


export default SearchBar;
