'use client'
import React, { useState, useEffect } from 'react';

const JsonViewer = () => {
  const [formData, setFormData] = useState({
    userId: localStorage.getItem(id),
    // Agrega aquí más campos según tus necesidades
  });
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON
    fetch('http://localhost:3000/api/users/models')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  if (!jsonData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Contenido del JSON</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonViewer;
