import React from 'react';
import JsonViewer from '../components/JsonViewer'; // Asegúrate de importar el componente

export default function Modelos(){
 
    return (
        <main >  
             <nav>    
              <div className="topnav">
                  <a className="active" href="../inicio">Inicio</a>
                  <a href="../modelos">Modelos</a>
                  <a href="../crearModelos">Crear Modelo</a>
              </div>
            </nav>
          
            <JsonViewer /> 
          
        </main>
      )
}