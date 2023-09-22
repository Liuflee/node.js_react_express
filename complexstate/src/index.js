import React from 'react';
import ReactDOM from 'react-dom/client'; // Se debe importar el cliente de ReactDOM para que funcione el método createRoot()
import App from './App';

// Desde la versión 17 de React, ReactDOM.render() se ha movido a ReactDOM.createRoot() 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
);
