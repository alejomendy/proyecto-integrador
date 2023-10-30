'use client'
import style from './css/Loguin.form.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
const LoginForm = () => {
  //   const [dropdown, setDropdown]= useState(false);

  // const abrirCerrarDropdown=()=>{
  //   setDropdown(!dropdown)
  // }
  const [formData, setFormData] = useState({
    usuario: '',
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
    axios.post('http://localhost:3000/api/user/login', formData)
      .then(response => {
        console.log('Respuesta de la API:', response.data);
  
        // Si la respuesta de la API indica que el usuario es válido
        if (response.data.usuarioValido) {
          // Redirige a la página deseada
          window.location.href = '/otraPagina';
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
        <label htmlFor="usuario"  className='centered-div '><p>Usuario</p></label>
          <input
            className='input'
            type="text"
            id="usuario"
            name="usuario"
            required
            value={formData.usuario}
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
          <button type="submit" className='button ' >Enviar</button>
        
      </form>
    </div>
  );
};

export default LoginForm;
