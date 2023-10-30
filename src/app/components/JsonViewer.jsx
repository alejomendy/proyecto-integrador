'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JsonViewer = () => {
    const [jsonData, setJsonData] = useState(null);

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
        <div className="json-container">
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    );
}

export default JsonViewer;
