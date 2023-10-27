'use client'
import { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [formularios, setFormularios] = useState([
    {
      name: '',
      tipo: 'STRING',
      nombre: '',
      allowNull: false,
      unique: false,
      relacion: false, // Nuevo campo para la relación
      relacionTipo: '1a1',
      relacionTabla1: '',
      relacionTabla2: '',
      relacionTabla3: '',
    },
  ]);

  const handleAddFormulario = () => {
    setFormularios([
      ...formularios,
      {
        name: '',
        tipo: 'STRING',
        nombre: '',
        allowNull: false,
        unique: false,
        relacion: false, // Valor inicial para la nueva checkbox de relación
        relacionTipo: '1a1',
        relacionTabla1: '',
        relacionTabla2: '',
        relacionTabla3: '',
      },
    ]);
  };

  const handleInputChange = (index, campo, value) => {
    const nuevosFormularios = [...formularios];
    nuevosFormularios[index][campo] = value;
    setFormularios(nuevosFormularios);
  };

  const handleRelacionChange = (index, value) => {
    const nuevosFormularios = [...formularios];
    nuevosFormularios[index]['relacion'] = value;
    setFormularios(nuevosFormularios);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: formularios.map((formulario) => formulario.name),
      data: formularios.map((formulario) => [
        {
          name: formulario.nombre,
          type: formulario.tipo,
          allowNull: formulario.allowNull,
          unique: formulario.unique,
        },
      ]),
      relationship: formularios.map((formulario) => {
        return {
          tipo: formulario.relacionTipo,
          tabla1: formulario.relacionTabla1,
          tabla2: formulario.relacionTabla2,
          tabla3: formulario.relacionTabla3,
        };
      }),
    };
      console.log(requestData)
     try {
     const response = await axios.post('URL_DE_TU_API', requestData);
      console.log('Respuesta:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {formularios.map((formulario, index) => (
        <form key={index}>
          <label>
            Name:
            <input
              type="text"
              value={formulario.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
          </label>
          <label>
            Tipo:
            <select
              value={formulario.tipo}
              onChange={(e) => handleInputChange(index, 'tipo', e.target.value)}
            >
              <option value="STRING">STRING</option>
              <option value="NUMBER">NUMBER</option>
              <option value="DATE">DATE</option>
              {/* Agrega otros tipos según tu necesidad */}
            </select>
          </label>
          <label>
            Nombre:
            <input
              type="text"
              value={formulario.nombre}
              onChange={(e) => handleInputChange(index, 'nombre', e.target.value)}
            />
          </label>
          <label>
            Allow Null:
            <input
              type="checkbox"
              checked={formulario.allowNull}
              onChange={(e) =>
                handleInputChange(index, 'allowNull', e.target.checked)
              }
            />
          </label>
          <label>
            Unique:
            <input
              type="checkbox"
              checked={formulario.unique}
              onChange={(e) =>
                handleInputChange(index, 'unique', e.target.checked)
              }
            />
          </label>
          <label>
            Relación:
            <input
              type="checkbox"
              checked={formulario.relacion}
              onChange={(e) =>
                handleRelacionChange(index, e.target.checked)
              }
            />
          </label>
          {formulario.relacion && (
            <>
              <label>
                Relación Tipo:
                <input
                  type="text"
                  value={formulario.relacionTipo}
                  onChange={(e) =>
                    handleInputChange(index, 'relacionTipo', e.target.value)
                  }
                />
              </label>
              <label>
                Relación Tabla 1:
                <input
                  type="text"
                  value={formulario.relacionTabla1}
                  onChange={(e) =>
                    handleInputChange(index, 'relacionTabla1', e.target.value)
                  }
                />
              </label>
              <label>
                Relación Tabla 2:
                <input
                  type="text"
                  value={formulario.relacionTabla2}
                  onChange={(e) =>
                    handleInputChange(index, 'relacionTabla2', e.target.value)
                  }
                />
              </label>
              <label>
                Relación Tabla 3:
                <input
                  type="text"
                  value={formulario.relacionTabla3}
                  onChange={(e) =>
                    handleInputChange(index, 'relacionTabla3', e.target.value)
                  }
                />
              </label>
            </>
          )}
        </form>
      ))}
      <button onClick={handleAddFormulario}>Agregar Formulario</button>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Formulario;