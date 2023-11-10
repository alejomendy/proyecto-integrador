'use client'
import style from './css/Loguin.form.css'
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    password: '',
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
    axios.post('http://localhost:3000/api/users/login', formData)
      .then(response => {
        console.log('Respuesta de la API:', response.data.id);

        //Si la respuesta de la API indica que el name es válido
        if (response.data.id) {
          // Redirige a la página deseada
          localStorage.setItem('id', JSON.stringify(response.data.id))
          window.location.href = '/inicio';
        }
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        // Puedes manejar el error aquí si es necesario
      });
  };
  return (
    <div className='centered-div'>
        <br />
        
        <h2 className='h2'>Iniciar Sesión</h2>
        <br />
      <form onSubmit={handleSubmit} className='form' > 
        <div >
        <label htmlFor="name"  className='centered-div '><p>Nombre de usuario</p></label>
          <input
            className='input'
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div> 
        <br />
        <div >
          <label htmlFor="contraseña"  className='centered-div '><p>Contraseña</p></label>
          <input 
            className='input'
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
          <br />
          <button type="submit" className='button '>Enviar</button>
        
      </form>
    </div>
  );
};

export default LoginForm;
