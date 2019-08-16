import React from 'react';
import './App.css';
import Selection from './pages/Selection/index';
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
        <div class="row">
          <div class="col-md-12">
          <p>Selecciona el nombre del estándar, regulación o marco legal </p>
            <select class="mdb-select colorful-select dropdown-primary md-form" multiple searcable="Buscar">
              <option value="1">Acuerdo No.006-2011</option>
              <option value="1">NIST - Cybersecurity Framework</option>
              <option value="1">GDC (República Dominicana)</option>
              <option value="1">PCI</option>
              <option value="1">ISO-27000</option>
            </select>
          </div>
        </div>
        <Selection />
      </div>
    </div>
  );
}

export default App;
