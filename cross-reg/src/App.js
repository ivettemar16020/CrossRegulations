import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//https://github.com/creativetimofficial/light-bootstrap-dashboard-react

function App() {
  return (
    <div className="App">
      <header className="App-header">
        CrssReg
      </header>
      <div class="header">
        <img class="logo"/>
        <div class="header-right">
          <a class="active" href="#home">Inicio</a>
          <a href="#history">Historial</a>
          <a href="#report">Reportes</a>
          <a href="#help">Ayuda</a>
        </div>
      </div>
      <div className="body">
        <ol class="arrows">
          <li><a href="#Selection">Selección</a></li>
          <li><a href="#Analysis">Análisis</a></li>
          <li><a href="#Checklist">Checklist</a></li>
          <li><a href="#State">Estado</a></li>
        </ol>
      </div>
    </div>
  );
}

export default App;
