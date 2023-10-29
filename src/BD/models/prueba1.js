const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const prueba1 = sequelize.define('prueba1', {
ojalafuncione: {  type: Sequelize.STRING, allowNull: false, unique: true }}, 
{tableName: "prueba1"});

module.exports ={ 
  prueba1,
}
