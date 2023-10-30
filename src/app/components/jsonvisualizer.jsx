import React from 'react';
import style from '../components/css/modelos.css'
const JsonVisualizer = () => {
    const jsonData = {
        "name": "Tumodelo",
        "data": [
            {
                "name": "dsadsa",
                "type": "STRING",
                "allowNull": false,
                "unique": true,
                "defaultValue": ["ssssss"]
            }
        ],
        "relationship": [
            {
                "tabla1": "Tabla1",
                "tabla2": "Tabla2",
                "tipo": "1a1"
            }
        ]
    };

    const formattedData = {
        nombre: jsonData.name,
        data: jsonData.data,
        relationship: jsonData.relationship
    };

    return (
        <div className="json-container">
            {Object.keys(formattedData).map(key => (
                <div key={key}>
                    <strong>{key}:</strong>
                    <ul>
                        {Array.isArray(formattedData[key]) ?
                            formattedData[key].map((item, index) => (
                                <li key={index}>
                                    {Object.keys(item).map(prop => (
                                        <div key={prop}>
                                            <strong>{prop}:</strong> {Array.isArray(item[prop]) ? item[prop].join(", ") : item[prop]}
                                        </div>
                                    ))}
                                </li>
                            )) :
                            <li>
                                {formattedData[key]}
                            </li>
                        }
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default JsonVisualizer;
