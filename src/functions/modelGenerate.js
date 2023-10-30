const fs = require('fs');


export default function generateModel(name, data, relationship, body){
  var routes = []
  if (name !== null && data !== null){
    for (let index = 0; index < name.length; index++) {
      var modelCode = ``
      var relationshipCode = ``
      if( relationship[index] !== undefined  ){
        console.log('relationship:  ', relationship[index])
        // console.log('relacion tipo: ',relationship[index].tipo)
        // console.log('Nombre: ',relationship[index].tabla1)
        if(relationship[index].tabla1 === name[index] || relationship[index].tabla2 === name[index] ){
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
            var through = relationship[index].tabla1 + relationship[index].tabla2
            relationshipCode = `${relationship[index].tabla1}.hasMany(${relationship[index].tabla2}) 
${relationship[index].tabla2}.belongsToMany(${relationship[index].tabla1},{ through: '${through}'})`                 
          }
        }
      }
      // console.log('item: ',data[index].map(item => item.name))
      

      // Genera el código del modelo sin la relacion.
      modelCode = modelCode + `\nconst { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const ${name[index]} = sequelize.define('${name[index]}', {
${data[index].map(item =>
  `${item.name}: { type: Sequelize.${item.type}, allowNull: ${item.allowNull}, unique: ${item.unique || false}, defaultValue: '${item.defaultValue || null}'  }`).join(',\n  ')}}, 
{timestamps:false,
tableName: "${name[index]}"});

module.exports ={ 
  ${name[index]},
}
`;  
    body = JSON.stringify(body)
    fs.writeFileSync(`./src/BD/models/userModels/${name[index]}-JSON.txt`, body);
    // Se agrega al codigo la relacion 
    modelCode = modelCode + relationshipCode
      // Escribe el código en un archivo modelByUser.js.
      fs.writeFileSync(`./src/BD/models/userModels/${name[index]}.js`, modelCode);

      console.log(`Archivo ${name[index]}.js generado.`);
      routes.push(`http://localhost:3000/src/BD/models/userModels/${name[index]}.js`); 
}
  return routes
  } 
  else{
    return false
  }
} 