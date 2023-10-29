const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Modelo1 = sequelize.define('Modelo1', {
tabla1: {  type: Sequelize.undefined, allowNull: undefined, unique: false }}, 
{tableName: "Modelo1"});

module.exports ={ 
  Modelo1,
}
