import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from './SearchBar';

const API_KEY = 'b5b4abe3ce694e1aade4e5cf20cb7118';

const App = () => {
  const [newsData, setNewsData] = useState([]); // Se inicializa el estado con un arreglo vacío
  
  const callAPI = (search) => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
      .then(response => response.json()) 
      .then(data => setNewsData(data.articles)) 
      .catch(error => console.error(error)); // Si hay un error, se muestra en la consola
  };  

  /**
   * Se utiliza un useEffect para que se llame a la API cuando se monta el componente
   * para que de esta manera no esté vacio 
  */
  useEffect(() => {
    callAPI('videojuegos');
  }, []); // [] Solo se ejecuta cuando se monta el componente 

  return (
    <div>
      <h1>Aplicación de Búsqueda de Noticias</h1>
      <SearchBar onSearch={callAPI} />
      <div>
        <h2>Noticias</h2>
        <ul> 
          {newsData.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Leer más</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
