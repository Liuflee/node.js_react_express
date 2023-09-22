import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./components/SearchBar";
import "./styles/styles.css";

const API_KEY = "b5b4abe3ce694e1aade4e5cf20cb7118";

const App = () => {
	const [newsData, setNewsData] = useState([]);

	const callAPI = (search) => {
		if (search.trim() !== "") { 
			// Verificar que el término de búsqueda no esté vacío
			fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
				.then((response) => response.json())
				.then((data) => setNewsData(data.articles))
				.catch((error) => console.error(error));
		}
	};

	useEffect(() => {
		callAPI("videojuegos");
	}, []);

	return (
		<div className="app-container"> 
			{/* Aplica estilos al contenedor principal */}
			<h1 className="app-title">Aplicación de Búsqueda de Noticias</h1>
			<SearchBar onSearch={callAPI} />
			<div className="news-container"> 
				{/* Aplica estilos al contenedor de noticias */}
				<h2 className="news-title">Noticias</h2>
				<ul className="news-list">
					{newsData.map((article, index) => (
						<li key={index} className="news-item"> 
							{/* Aplica estilos a cada noticia */}
							<h3 className="news-article-title">{article.title}</h3>
							<p className="news-article-description">{article.description}</p>
							<a
								className="news-article-link"
								href={article.url}
								target="_blank"
								rel="noopener noreferrer"
							>
                Leer más
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
