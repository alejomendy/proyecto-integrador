
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo1 = sequelize.define('Modelo1', {
campo1: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Modelo1"});

module.exports ={ 
  Modelo1,
}
