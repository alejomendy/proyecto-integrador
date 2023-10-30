'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    // Obtener el ID almacenado en el localStorage
    const userId = localStorage.getItem('id');

    if (userId) {
      // Realizar la consulta a la API con Axios
      axios.get(`http://localhost:3000/api/users/models`, userId)
        .then((response) => {
          // Obtener los datos de la respuesta
          const responseData = response.data;
          setData(responseData);
        })
        .catch((error) => {
          console.error('Error al realizar la solicitud a la API', error);
        });
    }
  }, []);

  return (
    <div>
      <h1>Datos de la API para el ID almacenado en el localStorage:</h1>
      <p>{data}</p>
    </div>
  );
};

export default ApiData;