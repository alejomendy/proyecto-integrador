"use client"
import Image from 'next/image'
import react, { useState,useEffect,usere } from 'react'
import Formulario from '../components/form'

import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

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









