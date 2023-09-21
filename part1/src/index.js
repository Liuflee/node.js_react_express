import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from './SearchBar';

const API_KEY = 'b5b4abe3ce694e1aade4e5cf20cb7118';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  
  const callAPI = (search) => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setNewsData(data.articles))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    // Realizar una búsqueda inicial (por ejemplo, noticias populares al cargar la página)
    callAPI('technology');
  }, []); // El segundo argumento [] indica que esto se ejecutará solo al montar el componente

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
