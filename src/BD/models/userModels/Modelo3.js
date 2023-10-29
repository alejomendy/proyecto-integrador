
const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Modelo3 = sequelize.define('Modelo3', {
nombre: { type: Sequelize.STRING, allowNull: false, unique: false }}, 
{timestamps:false,
tableName: "Modelo3"});

module.exports ={ 
  Modelo3,
}
