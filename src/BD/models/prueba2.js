const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const prueba2 = sequelize.define('prueba2', {
quefuncione: {  type: Sequelize.STRING, allowNull: true, unique: false }}, 
{tableName: "prueba2"});

module.exports ={ 
  prueba2,
}
