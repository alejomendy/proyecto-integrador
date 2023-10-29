
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo = sequelize.define('Modelo', {
campo: { type: Sequelize.STRING, allowNull: false, unique: false }}, 
{timestamps:false,
tableName: "Modelo"});

module.exports ={ 
  Modelo,
}
