'use client'
import React, { useState } from 'react';
import styles from './css/Loguin.form.css'
import axios from 'axios';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    handleLogin({ username, password });

    axios.post('http://localhost:3000/api/user/login', formData)
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
    <form onSubmit={handleSubmit} >
      <div className='usuario'  > 
        <label >Usuario:</label>
        <input
          className='text'
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='contraseña'>
        <label>Contraseña:</label>
        <input
          className='text'
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className='boton'>Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
