'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function JsonViewer  () {

  useEffect(() => {
    // Obtener el ID del usuario del almacenamiento local
    const userId = localStorage.getItem('id');
        if (userId) {
            // Realizar la solicitud HTTP para obtener el JSON desde la base de datos
            axios.get(`http://localhost:3000/api/users/models`)
                .then(response => {
                    setJsonData(response.data);   
                })
                .catch(error => {
                    console.error('Error al obtener el JSON desde la base de datos:', error);
                });
        }
    }, []);

    if (!jsonData) {
        return <div>Cargando...</div>;
    }

  return (
    <div>
      <h1>Datos de la API para el ID almacenado en el localStorage:</h1>
      <p>Json DATA: {jsonData}</p>
    </div>
  );
};