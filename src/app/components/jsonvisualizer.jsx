'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../components/css/modelos.css'

const JsonVisualizer = () => {
    const [jsonData, setJsonData] = useState();

    useEffect(() => {
        // Obtener el ID del usuario del almacenamiento local
        const userId = localStorage.getItem('id');

        if (userId) {
            // Realizar la solicitud HTTP para obtener el JSON desde la base de datos
            axios.get(`http://localhost:3000/api/users/models`)
                .then(response => {
                    console.log(response)
                    setJsonData(JSON.parse(response.data.modelo));
                    console.log('Jason ',jsonData)   
                })
                .catch(error => {
                    console.error('Error al obtener el JSON desde la base de datos:', error);
                });
        }
    }, []);
    
    
    // const formattedData = {
    //     nombre: jsonData.name,
    //     data: jsonData.data,
    //     relationship: jsonData.relationship
    // };

    return (
        <h1>s</h1>

        // <div className="json-container">
        //     {Object.keys(formattedData).map(key => (
        //         <div key={key}>
        //             <strong>{key}:</strong>
        //             <ul>
        //                 {Array.isArray(formattedData[key]) ?
        //                     formattedData[key].map((item, index) => (
        //                         <li key={index}>
        //                             {Object.keys(item).map(prop => (
        //                                 <div key={prop}>
        //                                     <strong>{prop}:</strong> {Array.isArray(item[prop]) ? item[prop].join(", ") : item[prop]}
        //                                 </div>
        //                             ))}
        //                         </li>
        //                     )) :
        //                     <li>
        //                         {formattedData[key]}
        //                     </li>
        //                 }
        //             </ul>
        //         </div>
        //     ))}
        // </div>
    );
}

export default JsonVisualizer;
