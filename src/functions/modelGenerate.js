const fs = require('fs');


export default function generateModel(name, data, relationship){
  // Supongamos que tienes información sobre un modelo y sus itemiedades.
  var routes = []
  if (name !== null && data !== null){
    for (let index = 0; index < name.length; index++) {
      var modelCode = ``
      var relationshipCode = ``
      if( relationship[index] !== undefined){
        console.log(relationship[index].tipo)
        if(relationship[index].tabla === name[index] || relationship[index].relacion === name[index] ){
          modelCode = `const { ${relationship[index].relacion} } = require("./${relationship[index].relacion}");`
          if(relationship[index].tipo === '1a1'){
            relationshipCode = `${relationship[index].tabla}.hasOne(${relationship[index].relacion}) 
${relationship[index].relacion}.belongsTo(${relationship[index].tabla}) `                 
          }
          if(relationship[index].tipo === '1aM'){
            relationshipCode = `${relationship[index].tabla}.hasMany(${relationship[index].relacion}) 
${relationship[index].relacion}.belongsTo(${relationship[index].tabla}) `                 
          }
          if(relationship[index].tipo === 'MaM'){
            relationshipCode = `${relationship[index].tabla}.hasMany(${relationship[index].relacion}) 
${relationship[index].relacion}.belongsToMany(${relationship[index].tabla}) `                 
          }
        }
       
        
      }
      

      // Genera el código del modelo Sequelize a partir de la información sin relacion con otro modelo.
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



 