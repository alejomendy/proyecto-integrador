'use client'
import { useState } from 'react';
import axios from 'axios';
import style from '../components/css/form.css'
export default function Formulario() {
  const [formularios, setFormularios] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [datos, setDatos] = useState([[]]);
  const [relationship, setRelationship] = useState([[]]);

  const agregarFormulario = () => {
    setFormularios([...formularios, {}]);
    setNombre([...nombre, '']);
    setDatos([...datos, []]);
    setRelationship([...relationship, []]);
  };

  const eliminarFormulario = (formularioIndex) => {
    const nuevosFormularios = [...formularios];
    nuevosFormularios.splice(formularioIndex, 1);
    setFormularios(nuevosFormularios);

    const nuevosNombres = [...nombre];
    nuevosNombres.splice(formularioIndex, 1);
    setNombre(nuevosNombres);

    const nuevosDatos = [...datos];
    nuevosDatos.splice(formularioIndex, 1);
    setDatos(nuevosDatos);

    const nuevasRelaciones = [...relationship];
    nuevasRelaciones.splice(formularioIndex, 1);
    setRelationship(nuevasRelaciones);
  };

  const handleNombreChange = (formularioIndex, nuevoNombre) => {
    const nuevosNombres = [...nombre];
    nuevosNombres[formularioIndex] = nuevoNombre;
    setNombre(nuevosNombres);
  };

  const agregarCampo = (formularioIndex) => {
    const nuevosDatos = [...datos];
    nuevosDatos[formularioIndex].push({
      name: '',
      type: 'STRING',
      allowNull: false,
      unique: false,
      defaultValue: [],
      
    });
    setDatos(nuevosDatos);
  };

  const agregarRelacion = (formularioIndex) => {
    const nuevasRelaciones = [...relationship];
    nuevasRelaciones[formularioIndex].push({
      tabla1: '',
      tabla2: '',
      tipo: ''
    });
    setRelationship(nuevasRelaciones);
  };

  const eliminarCampo = (formularioIndex, campoIndex) => {
    const nuevosDatos = [...datos];
    nuevosDatos[formularioIndex].splice(campoIndex, 1);
    setDatos(nuevosDatos);
  };

  const eliminarRelacion = (formularioIndex, relacionIndex) => {
    const nuevasRelaciones = [...relationship];
    nuevasRelaciones[formularioIndex].splice(relacionIndex, 1);
    setRelationship(nuevasRelaciones);
  };

  const handleCampoChange = (formularioIndex, campoIndex, field, value) => {
    const nuevosDatos = [...datos];
    nuevosDatos[formularioIndex][campoIndex] = {
      ...nuevosDatos[formularioIndex][campoIndex],
      [field]: value
    };
    setDatos(nuevosDatos);
  };

  const handleRelacionChange = (formularioIndex, relacionIndex, field, value) => {
    const nuevasRelaciones = [...relationship];
    nuevasRelaciones[formularioIndex][relacionIndex][field] = value;
    setRelationship(nuevasRelaciones);
  };

  const handleSubmit = async () => {
    const jsonData = formularios.map((_, formularioIndex) => ({
      name: nombre[formularioIndex],
      data: datos[formularioIndex].map(campo => ({
        name: campo.name || '',
        type: campo.type || 'STRING',
        allowNull: campo.allowNull || false,
        unique: campo.unique || false,
        defaultValue: campo.defaultValue || [],
        
        
      })),
      relationship: relationship[formularioIndex],
      id: localStorage.getItem('id'),
      
    }));

    try {
      // Realiza la solicitud HTTP a tu API usando Axios
      const response = await axios.post('http://localhost:3000/api/models/', jsonData);

      // Maneja la respuesta aquí si es necesario
      console.log('Respuesta de la API:', response.data);

      // Si deseas restablecer el formulario después de enviar los datos
      setFormularios([]);
      setNombre([]);
      setDatos([[]]);
      setRelationship([]);
    } catch (error) {
      // Maneja errores aquí
      console.error('Error al enviar los datos a la API:', error);
    }
  };

  return (
    <div className='container'>
      {formularios.map((_, formularioIndex) => (
        <div key={formularioIndex} className='form'>
          <form>
            <label>
              <h1 className='text'>Nombre de la tabla:</h1>
              <input
                type="text"
                value={nombre[formularioIndex] || ''}
                onChange={(e) => handleNombreChange(formularioIndex, e.target.value)}
                required
              />
            </label>
            <br />

            <div>
              <label>
                <h1>Datos:</h1>
              </label>
              {datos[formularioIndex].map((campo, campoIndex) => (
                <div key={campoIndex}>
                  <input
                    type="text"
                    placeholder="Nombre del Campo"
                    value={campo.name || ''}
                    onChange={(e) => handleCampoChange(formularioIndex, campoIndex, 'name', e.target.value)}
                  />
                  <label>
                    <h1>Type:</h1>
                    <select
                      value={campo.type || 'STRING'}
                      onChange={(e) => handleCampoChange(formularioIndex, campoIndex, 'type', e.target.value)}
                    >
                      <option value="STRING">STRING</option>
                      <option value="NUMBER">NUMBER</option>
                      <option value="DATE">DATE</option>
                    </select>
                  </label>
                  <label>
                    <h1>Allow Null:</h1>
                    <input
                      type="checkbox"
                      checked={campo.allowNull || false}
                      onChange={() => handleCampoChange(formularioIndex, campoIndex, 'allowNull', !campo.allowNull)}
                    />
                  </label>
                  <label>
                    <h1>Unique:</h1>
                    <input
                      type="checkbox"
                      checked={campo.unique || false}
                      onChange={() => handleCampoChange(formularioIndex, campoIndex, 'unique', !campo.unique)}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="defaulValue"
                    value={campo.defaultValue || []}
                    onChange={(e) => handleCampoChange(formularioIndex, campoIndex, 'defaultValue', e.target.value
                      .split(',')
                      .map(val => val.trim())
                    )}
                  />
                  <button type="button" className='button' onClick={() => eliminarCampo(formularioIndex, campoIndex)}>Eliminar</button>
                </div>
              ))}
              <button type="button"  className='button' onClick={() => agregarCampo(formularioIndex)}>Agregar Campo</button>
            </div>
            <br />

            <div>
              <label>
                <h1>Relaciones:</h1>
              </label>
              {relationship[formularioIndex].map((relacion, relacionIndex) => (
                <div key={relacionIndex}>
                  <input
                    type="text"
                    placeholder="Tabla Padre"
                    value={relacion.tabla1 || ''}
                    onChange={(e) => handleRelacionChange(formularioIndex, relacionIndex, 'tabla1', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Tabla Hijo"
                    value={relacion.tabla2 || ''}
                    onChange={(e) => handleRelacionChange(formularioIndex, relacionIndex, 'tabla2', e.target.value)}
                  />
                  <select
                    value={relacion.tipo || '1a1'}
                    onChange={(e) => handleRelacionChange(formularioIndex, relacionIndex, 'tipo', e.target.value)}
                    >
                    <option value="1a1">1a1</option>
                    <option value="1aM">1aM</option>
                    <option value="MaM">MaM</option>
                  </select>
                  <button type="button" onClick={() => eliminarRelacion(formularioIndex, relacionIndex)}>Eliminar</button>
                </div>
              ))}
              <button type="button" onClick={() => agregarRelacion(formularioIndex)}>Agregar Relación</button>
            </div>
            <br />
          </form>
          <button type="button" onClick={() => eliminarFormulario(formularioIndex)}>Eliminar Formulario</button>
        </div>
      ))}
      <div > 
        <button type="button"  onClick={agregarFormulario}>Generar un Formulario</button>
      </div>
      <button type="button"  onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
