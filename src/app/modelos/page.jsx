import React from 'react';
import NavBar from '../components/nav';
import VerificarCuenta from '../components/verificarCuenta';
import Visualizer from '../components/visualizar';

const App = () => {
    return (
        <div>
            <NavBar/>
            <VerificarCuenta/>
            <h1 className="center">Visualizador de JSON</h1>
            <Visualizer/>
        </div>
    );
}

export default App;

