"use client"
import Formulario from '../components/form'



export default function Home() {
  
  
  return (
    <main >  
         <nav>    
          <div className="topnav">
              <a className="active" href="../inicio">Inicio</a>
              <a href="../modelos">Modelos</a>
              <a href="../crearModelos">Crear Modelo</a>
          </div>
        </nav>
      
        <Formulario/>
      
    </main>
  )
}









