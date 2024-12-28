// Este arquivo é o ponto de entrada da aplicação. Ele inicializa a aplicação e renderiza o componente principal.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);