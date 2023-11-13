'use client'
import { useEffect, useState } from 'react';
import styles from '../../components/css/Visualizer.module.css';


const VisualizerId = ({params}) => {
  const [data, setData] = useState(null);
  const { id } = params

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(`http://localhost:3000/api/users/models${id}`,{method:'POST',headers:{'Content-Type': 'application/json'}});
      
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.statusText}`);
      }

      const jsonResponseList = await response.json();
      

      // Realizar el análisis adicional para convertir los strings en objetos JavaScript
      const parsedData = jsonResponseList.modelo.map((jsonString) => JSON.parse(jsonString));

      setData(parsedData);
      
    };

    fetchData();
  }, []);
  

  if (!data) {
    return <div>Cargando...</div>;
  }

  // Ahora puedes acceder a los datos como data[0].name, data[0].data, etc.
  console.log('datos ',data);

  return (
    <div className={styles.container}>
      {data.map((data, index) => (
        <div key={index} className={styles.modelo}>
          {data.map((modelo, modeloIndex) => (
            <div key={modeloIndex} className={styles.modelo}>
              <h1>{`Nombre del modelo: ${modelo.name}`}</h1>
              {modelo.data.map((modeloData, modeloDataIndex) => (
                <div key={modeloDataIndex}>
                  <ul>
                    <li>{`Nombre del campo: ${modeloData.name}`}</li>
                    <li>{`Tipo: ${modeloData.type}`}</li>
                    <li>{`Permite nulos: ${modeloData.allowNull}`}</li>
                    <li>{`Único: ${modeloData.unique}`}</li>
                    <li>{`Valor por defecto: ${modeloData.defaultValue}`}</li>
                  </ul>
                  <br />
                </div>
              ))}
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default VisualizerId;