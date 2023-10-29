const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Tabla1 = sequelize.define('Tabla1', {
modelo1: {  type: Sequelize.DATE, allowNull: true, unique: false }}, 
{tableName: "Tabla1"});

module.exports ={ 
  Tabla1,
}
