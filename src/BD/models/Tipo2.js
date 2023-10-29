const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Tipo2 = sequelize.define('Tipo2', {
modelo2: {  type: Sequelize.undefined, allowNull: undefined, unique: false }}, 
{tableName: "Tipo2"});

module.exports ={ 
  Tipo2,
}
