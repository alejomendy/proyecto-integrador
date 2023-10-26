// const { sequelize } = require("../../../BD/bd");
// const { DataTypes } = require('sequelize')
// import { syncDB } from "@/BD/bd";

// export default async function modelsData(req, res){
//     if (req.method === 'POST'){
//         console.log('LA DATA', req.body)
//         console.log('nombre:', req.body.model)
//         console.log('propi:', req.body.propiedad)
//         console.log('nombre campo:', req.body.campo1.nombre)
//         console.log('datos campo:', req.body.campo1.datos)
//         const nombreCampo1= req.body.campo1.nombre
//         const Modelo = sequelize.define(
//             req.body.model, {
//                 a: `${req.body.campo1.datos}`

//             },
            
            
            
            
//             {tableName: req.body.model})







//         syncDB()
//         res.json({msg :'a'})
//     }
//}

const fs = require('fs');

export default function generateModel(){
// Supongamos que tienes información sobre un modelo y sus propiedades.
const modelName = 'modelByUser';
const properties = [
  { name: 'nombre', type: 'STRING', allowNull: false },
  // Agrega más propiedades según sea necesario.
];

// Genera el código del modelo Sequelize a partir de la información.
const modelCode = `
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Practico-Integrador', 'postgres', 'admin', {
  dialect: 'postgres'
});

const ${modelName} = sequelize.define('${modelName}', {
  ${properties.map(prop => 
                  `${prop.name}: {  type: Sequelize.${prop.type}, 
                                    allowNull: ${prop.allowNull}, 
                                    unique: ${prop.unique || false} }`
                  ).join(',\n  ')}
}, {tableName: ${modelName}});

module.exports = ${modelName};
`;

// Escribe el código en un archivo modelByUser.js.
fs.writeFileSync(`./src/BD/models/${modelName}.js`, modelCode);

console.log(`Archivo ${modelName}.js generado.`);
}
