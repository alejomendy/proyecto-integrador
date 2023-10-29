const fs = require('fs');


export default function generateModel(name, data, relationship){
  // Supongamos que tienes información sobre un modelo y sus itemiedades.
  var routes = []
  if (name !== null && data !== null){
    for (let index = 0; index < name.length; index++) {
      var modelCode = ``
      var relationshipCode = ``
      if( relationship[index] !== undefined ){
        // console.log('relationship:  ', relationship)
        // console.log('relacion tipo: ',relationship[index].tipo)
        // console.log('Nombre: ',relationship[index].tabla1)
        if(relationship[index].tabla1 === name[index] || relationship[index].tabla2 === name[index] ){
          console.log('aca tamo')
          modelCode = `const { ${relationship[index].tabla2} } = require("./${relationship[index].tabla2}");`
          if(relationship[index].tipo === '1a1'){
            relationshipCode = `${relationship[index].tabla1}.hasOne(${relationship[index].tabla2}) 
${relationship[index].tabla2}.belongsTo(${relationship[index].tabla1}) `                 
          }
          if(relationship[index].tipo === '1aM'){
            relationshipCode = `${relationship[index].tabla1}.hasMany(${relationship[index].tabla2}) 
${relationship[index].tabla2}.belongsTo(${relationship[index].tabla1}) `                 
          }
          if(relationship[index].tipo === 'MaM'){
            through = relationship[index].tabla1 + relationship[index].tabla2
            relationshipCode = `${relationship[index].tabla1}.hasMany(${relationship[index].tabla2}) 
${relationship[index].tabla2}.belongsToMany(${relationship[index].tabla1},{ through: ${through}})`                 
          }
        }
       
        
      }
      console.log('item: ',data[index].map(item => item.name))
      

      // Genera el código del modelo Sequelize a partir de la información sin tabla2 con otro modelo.
      modelCode = modelCode + `const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const ${name[index]} = sequelize.define('${name[index]}', {
${data[index].map(item =>
  `${item.name}: {  type: Sequelize.${item.type}, allowNull: ${item.allowNull}, unique: ${item.unique || false} }`).join(',\n  ')}}, 
{tableName: "${name[index]}"});

module.exports ={ 
  ${name[index]},
}
`;       

    modelCode = modelCode + relationshipCode
      // Escribe el código en un archivo modelByUser.js.
      fs.writeFileSync(`./src/BD/models/${name[index]}.js`, modelCode);

      console.log(`Archivo ${name[index]}.js generado.`);
      routes.push(`http://localhost:3000/src/BD/models/${name[index]}.js`); 
}
return routes
} 
else{
  return false
}
} 