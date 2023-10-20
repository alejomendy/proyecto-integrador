"use client"
import Image from 'next/image'
import react, { useState,useEffect,usere } from 'react'
import Formulario from '../components/Formulario'
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

export default function Home() {
  const [dropdown, setDropdown]= useState(false);

  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown)
  }
  return (
    <main >  
      <div class="custom-input">
        <label> Nombre del Campo </label>
        <input type="text" ></input>
      </div>   
      <div>
        <label htmlFor="dropdown">Selecciona una opción:</label>
        <select id="dropdown" className='textcolor'>
          <option value="">--Selecciona--</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>
    </main>
  )
}









