'use client'
import style from '../components/css/home.css'
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
 
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
    <div>
      <br />
      <br />
      
      <form onSubmit={handleSubmit}  >
        <div className='form' >
            <div >
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
          <label htmlFor="campo2">Selecciona una opción:</label>
            <select id="dropdown" className='text' name='campo2' value={formData.campo2} onChange={handleChange} required>
              <option value="Unique">Unique</option>
              <option value="Default Value">Default Value</option>
              <option value="Null">Null</option>
            </select>
          </div>
        </div>
        {/* Agrega más campos según tus necesidades */}
        <br />
        <div className='form'>
          <button type="submit" className='boton centered-div' >Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

