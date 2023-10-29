const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Tipo1 = sequelize.define('Tipo1', {
modelo1: {  type: Sequelize.undefined, allowNull: undefined, unique: false }}, 
{tableName: "Tipo1"});

module.exports ={ 
  Tipo1,
}
