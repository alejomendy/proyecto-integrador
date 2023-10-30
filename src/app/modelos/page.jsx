// import React from 'react';
// import fs from 'fs';
// import style from '../components/css/modelos.css'
// // Lee el archivo JSON
// const jsonData = JSON.parse(fs.readFileSync('./src/BD/models/userModels/Tumodelo-JSON.txt', 'utf-8'));

// function App() {
//   const renderListItems = () => {
//     return Object.keys(jsonData).map((key) => {
//       return (
//         <li key={key}>
//           <strong>{key}:</strong> {JSON.stringify(jsonData[key])}
//         </li>
//       );
//     });
//   };

//   return (
//     <><nav>
//       <div className="topnav">

//         <a className="active" href="../inicio">Inicio</a>
//         <a href="../modelos">Modelos</a>
//         <a href="../crearModelos">Crear Modelo</a>
//       </div>
//     </nav><div className='container'>
//         <h1>Tus modelos</h1>
//         <br />
//         <ul>
//           {renderListItems()}
//         </ul>
//       </div></>
//   );
// }

// export default App;
import React from 'react';
import JsonViewer from '../components/JsonViewer';

const App = () => {
    return (
        <div className="App">
            <h1>Visualizador de JSON</h1>
            <JsonViewer />
        </div>
    );
}

export default App;

