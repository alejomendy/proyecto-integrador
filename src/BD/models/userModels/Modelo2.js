
const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Modelo2 = sequelize.define('Modelo2', {
nombre: { type: Sequelize.STRING, allowNull: false, unique: false }}, 
{timestamps:false,
tableName: "Modelo2"});

module.exports ={ 
  Modelo2,
}
