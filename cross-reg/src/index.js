import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
//import Selection from './pages/Selection/index';
import App from './App.js';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))