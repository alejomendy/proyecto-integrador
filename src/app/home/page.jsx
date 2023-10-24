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
              <a className="active" href="../home">Home</a>
              <a href="#Modelos">Modelos</a>
          </div>
        </nav>
      <Formulario/>
    </main>
  )
}









