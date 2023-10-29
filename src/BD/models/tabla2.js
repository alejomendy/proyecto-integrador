const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Tabla2 = sequelize.define('Tabla2', {
modelo2: {  type: Sequelize.undefined, allowNull: true, unique: false }}, 
{tableName: "Tabla2"});

module.exports ={ 
  Tabla2,
}
