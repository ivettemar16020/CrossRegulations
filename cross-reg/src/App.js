import React from 'react';
import './App.css';
import Selection from './pages/Selection/index';
import Analysis from './pages/Analysis/index';
import Header from './Header'
import Main from './Main'
//https://github.com/creativetimofficial/light-bootstrap-dashboard-react

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header">
        <img className="logo"/>
        <div className="header-right">
            <a className="active" href="/">Inicio</a>
            <a href="#history">Historial</a>
            <a href="#report">Reportes</a>
            <a href="#help">Ayuda</a>
        </div>
      </div>
      <div className="body">
        <ol className="arrows">
          <li><a href="/selection">Selección</a></li>
          <li><a href="/analysis">Análisis</a></li>
          <li><a href="/checklist">Checklist</a></li>
          <li><a href="/state">Estado</a></li>
        </ol>
        <Main />
      </div>
    </div>
  );
}

export default App;
