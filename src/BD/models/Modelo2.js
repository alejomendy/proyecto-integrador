const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Modelo2 = sequelize.define('Modelo2', {
Tabla1: {  type: Sequelize.undefined, allowNull: undefined, unique: false }}, 
{tableName: "Modelo2"});

module.exports ={ 
  Modelo2,
}
