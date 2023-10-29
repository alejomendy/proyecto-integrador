'use client'
import { useState } from 'react';
import axios from 'axios';
import style from '../components/css/home.css'


const Formulario = () => {
  const [formularios, setFormularios] = useState([
    {
      name: '',
      data:[],
      relationship:[ {tipo:'1a1' }],
      
      
    },
  ]);

  const handleAddFormulario = () => {
    setFormularios([
      ...formularios,
      {
        name: '',
        data:[],
        relationship:[{tipo:'1a1' }],
        
        // name: '',
        // tipo: 'STRING',
        // nombre: '',
        // allowNull: false,
        // unique: false,
        // relacion: false, // Valor inicial para la nueva checkbox de relación
        
       
      },
    ]);
  };

  const handleInputChange = (index, campo, value) => {
    const nuevosFormularios = [...formularios];
    nuevosFormularios[index][campo] = value;
    setFormularios(nuevosFormularios);
  };

  const handleRelacionChange = (index, value) => {
    if (index === 0) {
      const nuevosFormularios = [...formularios];
      nuevosFormularios[index]['relacion'] = value;
      setFormularios(nuevosFormularios);
    }
  };

  const handleSubmit = async (e) => {
  

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
          
        };
      }),
    };
      console.log(requestData)
     try {
     const response = await axios.post('http://localhost:3000/api/models/', requestData);
      console.log('Respuesta:', response.data);
      //  window.location.reload()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='containerBorder'>
        <div className='container'>
          {formularios.map((formulario, index) => (
            <form key={index}>
              <div className='margin'>
                <label className='text'>
                  Titulo:
                  <input 
                    className = 'input'
                    type="text"
                    required
                    value={formulario.name}
                    
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  />
                </label>
              </div>
              <div className='margin'>
                <label className='text'>
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
                </label >
              </div>
              <div className='margin'>
                <label className='text'>
                  Nombre del campo:
                  <input 
                    required
                    className = 'input'
                    type="text"
                    value={formulario.nombre}
                    onChange={(e) => handleInputChange(index, 'nombre', e.target.value)}
                  />
                </label>
              </div>
              <div className='margin'>
                <label className='text'>
                  Default value:
                  <input 
                    required
                    className = 'input'
                    type="text"
                    value={formulario.defaultvalue}
                    onChange={(e) => handleInputChange(index, 'default value', e.target.value)}
                  />
                </label>
              </div>
              <div className='text' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                   Null:
                  <input className = 'input' 
                    type="checkbox"
                    checked={formulario.allowNull}
                    onChange={(e) => handleInputChange(index, 'allowNull', e.target.checked)}
                  />
                </label>
                

                <label style={{ display: 'flex', alignItems: 'center' }}>
                  Unique:
                  <input className = 'input'
                    type="checkbox"
                    checked={formulario.unique}
                    onChange={(e) => handleInputChange(index, 'unique', e.target.checked)}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center' }}>
                  Relación:
                  <input
                    className='input'
                    type="checkbox"
                    checked={formulario.relacion}
                    onChange={(e) => handleRelacionChange(index, e.target.checked)}
                  />
                </label>
              </div>
              {formulario.relacion &&  (
                
                <>
                <form key={index}>
                  {index === 0 &&(
                      <label className='text'>
                        Tipo de relacion:
                        <select 
                          
                          value={formulario.relacionTipo }
                          onChange={(e) => handleInputChange(index, 'relacionTipo', e.target.value)}
                        > 
                          <option value="none"  selected disabled hidden>seleccione</option>
                          <option value='1a1' >1a1</option>
                          <option value='1aM' >1aM</option>
                          <option value='MaM'>MaM</option>
                        </select>
                      </label >
                  )}
                </form>
                 
                  <label className='text'>
                    Relación Tabla Padre:
                    <input className = 'input'
                      type="text"
                      value={formulario.relacionTabla1}
                      onChange={(e) =>
                        handleInputChange(index, 'relacionTabla1', e.target.value)
                      }
                    />
                  </label>
                  <label className='text'>
                    Relación Tabla Hijo:
                    <input className = 'input'
                      type="text"
                      value={formulario.relacionTabla2}
                      onChange={(e) =>
                        handleInputChange(index, 'relacionTabla2', e.target.value)
                      }
                    />
                  </label>
                  
                </>
              )}
            </form>
          ))}
            
              <div className='button1'>
                <button  onClick={handleAddFormulario}>Agregar Formulario</button>
              </div>
                <div className='button2'>
                  <button onClick={handleSubmit}>Enviar</button>
                </div>
           
        </div>
  </div>
  );
};
export default Formulario;
