'use client'
import style from './css/Form.module.css'
import React, { useState } from 'react';
import axios from 'axios';
//import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
const Formulario = () => {

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
    axios.post('http://localhost:3000/api/models', formData)
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
    <form onSubmit={handleSubmit}>
      <div className='customInput' >
        <label htmlFor="campo1"><p>Nombre del campo</p></label>
        <input
          type="text"
          id="campo1"
          name="campo1"
          required
          value={formData.campo1}
          onChange={handleChange}
        />
      </div>
      <div className='drop'>
        <label htmlFor="campo2">Selecciona una opción:</label>
        <select id="dropdown" className='textcolor' name='campo2' value={formData.campo2} onChange={handleChange} required>
          <option value="">--Selecciona--</option>
          <option value="DataType.STRING">Unique</option>
          <option value="Default Value">Default Value</option>
          <option value="Null">Null</option>
        </select>
        {/* <input
            type="text"
            id="campo2"
            name="campo2"
            value={formData.campo2}
            onChange={handleChange}
            />*/}
        
      </div>
      {/* Agrega más campos según tus necesidades */}
      <button type="submit" className='boton'  >Enviar</button>
    </form>
  );
};

export default Formulario;
