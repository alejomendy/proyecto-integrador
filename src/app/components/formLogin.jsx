'use client'
import style from './css/Form.module.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
const LoginForm = () => {
  //   const [dropdown, setDropdown]= useState(false);

  // const abrirCerrarDropdown=()=>{
  //   setDropdown(!dropdown)
  // }
  const [formData, setFormData] = useState({
    campo1: '',
    campo2: '',
    // Agrega aquí más campos según tus necesidades
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer la solicitud a la API
    axios.post('URL_DE_TU_API', formData)
      .then(response => {
        console.log('Respuesta de la API:', response.data);
        // Puedes hacer algo con la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí si es necesario
      });
  };

  return (
    <form onSubmit={handleSubmit}  >
      <div className='form' >
          <div className='centered-div'>
            <label htmlFor="campo1" ><p>Nombre del campo</p></label>
            <input
              className='text'
              type="text"
              id="campo1"
              name="campo1"
              required
              value={formData.campo1}
              onChange={handleChange}
            />
          </div>
      </div>
      <div className='form' >
        <div className='centered-div '>
          <label htmlFor="contraseña"  ><p>Contraseña</p></label>
          <input 
            className='text'
            type="text"
            id="pasword"
            name="pasword"
            required
            value={formData.pasword}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Agrega más campos según tus necesidades */}
      <div className='form'>
        <button type="submit" className='boton centered-div' >Enviar</button>
      </div>
    </form>
  );
};

export default LoginForm;
