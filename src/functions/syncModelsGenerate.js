const fs = require('fs');

export default async function syncModelsRelation(name) {
    var syncCode = `const { sequelize } = require("../bd");`

    syncCode = syncCode + `
${name.map(item => `const { ${item} } = require("./${item}");`).join('\n')}`

console.log(name)
syncCode = syncCode + `

export default async function syncUserModel(){
    try {
        await sequelize.sync({force: true});
        console.log('Sync was successfully.');
        return true
    } catch (error) {
        console.error('Unable to sync to the database:', error);
        return false
    }
    
}`;
  // Escribe el código en un archivo syncModels.js.
  fs.writeFileSync(`./src/BD/models/syncModels.js`, syncCode);

  console.log(`Archivo syncModels.js generado.`);
  return true
}