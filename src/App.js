import React from 'react';



function App() {
  return (
    <div className="App">
      <h1>Tabla de integrantes</h1>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Identificación</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paola Andrea</td>
              <td>Hernández Velásquez</td>
              <td>222382893923</td>
              <td>cmtecnica09@elpoli.edu.co</td>
              <td>88912310391</td>
            </tr>
            <tr>
              <td>mariano N</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
