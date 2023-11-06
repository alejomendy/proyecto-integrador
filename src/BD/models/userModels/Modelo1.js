const { Modelo2 } = require("./Modelo2");
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo1 = sequelize.define('Modelo1', {
campo1: { type: Sequelize.STRING, allowNull: true, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Modelo1"});

module.exports ={ 
  Modelo1,
}
Modelo1.hasOne(Modelo2) 
Modelo2.belongsTo(Modelo1) 